'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
import styles from '@/styles/ThreeScene.module.css';

const ThreeScene = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const geometry = new THREE.SphereGeometry(3, 64, 64);
        const material = new THREE.MeshStandardMaterial({
            color: '#00ff83',
            roughness: 0.5,
        });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const light1 = new THREE.PointLight(0xffffff, 100);
        light1.position.set(-50, 50, 10);
        light1.intensity = 10000;
        scene.add(light1);

        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.z = 20;
        scene.add(camera);

        const canvas = canvasRef.current!;
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio || 1);

        const controls = new OrbitControls(camera, canvas);
        controls.enableDamping = true;
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.autoRotate = true;
        controls.minPolarAngle = Math.PI/2;
        controls.maxPolarAngle = Math.PI/2;
        controls.autoRotateSpeed = 7.5;

        const handleResize = () => {
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);

        const loop = () => {
            controls.update();
            renderer.render(scene, camera);
            requestAnimationFrame(loop);
        };
        loop();

        const tl = gsap.timeline({ defaults: { duration: 1 } });
        tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 2, x: 2, y: 2 });
        tl.fromTo('nav', { y: '-100%' }, { y: '0%' });
        tl.fromTo('.title', { opacity: 0 }, { opacity: 1 });

        let mouseDown = false;
        let rgb: number[] = [];
        window.addEventListener('mousedown', () => (mouseDown = true));
        window.addEventListener('mouseup', () => (mouseDown = false));
        window.addEventListener('mousemove', (e) => {
            if (mouseDown) {
                rgb = [
                    Math.round((e.pageX / window.innerWidth) * 255),
                    Math.round((e.pageY / window.innerHeight) * 255),
                    150,
                ];
                const newColor = new THREE.Color(`rgb(${rgb.join(',')})`);
                gsap.to(mesh.material.color, { r: newColor.r, g: newColor.g, b: newColor.b });
            }
        });

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.webgl}></canvas>;
};

export default ThreeScene;
