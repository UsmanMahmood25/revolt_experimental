'use client';

import styles from '@/styles/bike_styles/ThreeScene_Demo.module.css';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';

const ThreeSceneDemo = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();

        // Create the Sphere
        const geometry = new THREE.SphereGeometry(3, 64, 64);
        const material = new THREE.MeshStandardMaterial({
            color: '#00ff83',
            roughness: 0.5,
        });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        mesh.scale.set(5, 5, 5); // Scale up the model (e.g., 2x its original size)

        // Light setup
        const light = new THREE.PointLight(0xffffff, 100, 100);
        light.position.set(0, 10, 10);
        light.intensity = 200;
        scene.add(light);

        // Camera setup
        const container = containerRef.current!;
        const { clientWidth: width, clientHeight: height } = container;
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.z = 10;
        scene.add(camera);

        // Renderer setup
        const canvas = canvasRef.current!;
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio || 2);

        // OrbitControls setup
        const controls = new OrbitControls(camera, canvas);
        controls.enableDamping = true;
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 5;

        // Handle window resize
        const handleResize = () => {
            const width = container.clientWidth;
            const height = container.clientHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);

        // Animation loop
        const loop = () => {
            controls.update();
            renderer.render(scene, camera);
            requestAnimationFrame(loop);
        };
        loop();

        // GSAP animations
        const tl = gsap.timeline({ defaults: { duration: 1 } });
        tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
        tl.fromTo('nav', { y: '-100%' }, { y: '0%' });
        tl.fromTo('.title', { opacity: 0 }, { opacity: 1 });

        // Mouse interaction for color change
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

    return (
        <div className={styles['parent-container']}>
            <div ref={containerRef} className={styles.container}>
                <canvas ref={canvasRef} className={styles.webgl}></canvas>
            </div>
        </div>
    );
};

export default ThreeSceneDemo;
