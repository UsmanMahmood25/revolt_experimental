'use client';

import styles from '@/styles/bike_styles/ThreeScene_Bike_1.module.css';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { mx_trilerp_1 } from 'three/examples/jsm/nodes/materialx/lib/mx_noise.js';

const ThreeScene_Bike1 = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();

        // GLTF Model setup
        const loader = new GLTFLoader();
        loader.load('/assets/honda_shadow_rs_2010/scene.gltf', (gltf) => {
            const model = gltf.scene;
            model.scale.set(2.05, 2.05, 2.05); // Scale the model
            scene.add(model);

            // GSAP animations for the model
            const tl = gsap.timeline({ defaults: { duration: 1 } });
            tl.fromTo(model.scale, { z: 0, x: 0, y: 0 }, { z: 2.2, x: 2.2, y: 2.2 });
        });

        // Light setup
        const light = new THREE.PointLight(0xffffff, 100, 100);
        const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Adjust intensity as needed
        light.position.set(0, 10, 10);
        light.intensity = 1000;
        scene.add(light);
        scene.add(ambientLight);

        // Camera setup
        const container = containerRef.current!;
        const { clientWidth: width, clientHeight: height } = container;
        const camera = new THREE.PerspectiveCamera(45, width / (height * 0.5), 0.01, 10);
        camera.position.z = 4.75;
        camera.position.y = 5.75;
        camera.lookAt(new THREE.Vector3(0.2, 0.2, -0.2));
        scene.add(camera);

        // Renderer setup
        const canvas = canvasRef.current!;
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio || 2);

        // OrbitControls setup
        const controls = new OrbitControls(camera, canvas);
        controls.enableDamping = true;
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 4;       // Updated Roate Speed from 5 to 4
        controls.update();

        // Lock rotation to the X-axis only
        controls.minPolarAngle = Math.PI / 2.5; // Prevent camera from moving below the X-axis
        controls.maxPolarAngle = Math.PI / 2.5; // Prevent camera from moving above the X-axis

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

export default ThreeScene_Bike1;
