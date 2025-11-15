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
        let bikeRoot: THREE.Group | null = null;

        loader.load('/assets/honda_shadow_rs_2010/scene.gltf', (gltf) => {
            bikeRoot = gltf.scene;
            bikeRoot.scale.set(2.05, 2.05, 2.05);
            scene.add(bikeRoot);

            //recenter model to origin for easier coordinates
            const box = new THREE.Box3().setFromObject(bikeRoot);
            const center = box.getCenter(new THREE.Vector3());
            bikeRoot.position.sub(center);

            // Initial GSAP entrance
            gsap.fromTo(
                bikeRoot.scale,
                { x: 0, y: 0, z: 0 },
                { x: 2.2, y: 2.2, z: 2.2, duration: 2, ease: 'power2.out' }
            );

            // --- HOTSPOTS: adjust positions to your model after recentering ---
            const handlebarPos = new THREE.Vector3(0, 1.2, 0.6);  
            const seatPos = new THREE.Vector3(1, 1.0, 0.0);
            const frontWheelPos = new THREE.Vector3(1.1, 0.4, 0.0);

            const handlebarZone = makeHotspot(handlebarPos, 0.3, 0.3, 0.3, 'handlebars');
            const seatZone = makeHotspot(seatPos, 0.12, 0.2, 0.5, 'seat');
            const frontWheelZone = makeHotspot(frontWheelPos, 0.14, 0.2, 0.2, 'frontWheel');

            bikeRoot.add(handlebarZone, seatZone, frontWheelZone);
            clickableParts.push(handlebarZone, seatZone, frontWheelZone);
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
        const camera = new THREE.PerspectiveCamera(45, width / (height), 0.1, 100);
        camera.position.z = 4.75;
        camera.position.y = 5.75;
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
        controls.enableZoom = true;
        controls.autoRotate = false;
        controls.autoRotateSpeed = 4;   
        controls.minDistance = 5;
        controls.maxDistance = 20;
        controls.target = new THREE.Vector3(0, 1, 0); // Focus the controls on the model's center 
        controls.update();  

        // Raycaster setup for clickable parts
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        const clickableParts: THREE.Object3D[] = [];

        //spherical hotspots to click on
        function makeHotspot(
            position: THREE.Vector3,
            width = 0.5,
            height = 0.5,
            depth = 0.5,
            name?: string
            ) {
            const geometry = new THREE.BoxGeometry(width, height, depth);
            const material = new THREE.MeshBasicMaterial({
                color: 0x00ff00,     // bright green
                transparent: true,
                opacity: 0.4,        // visible for testing
                wireframe: true      // easier to see edges
            });

            const mesh = new THREE.Mesh(geometry, material);
            if (name) mesh.name = name;
            mesh.position.copy(position);
            return mesh;
            }


        function smoothZoomTo(point: THREE.Vector3, approach = 0.95, duration = 1.3) {
            const end = camera.position.clone().lerp(point, approach);
            gsap.to(camera.position, {
                x: end.x,
                y: end.y,
                z: end.z,
                duration,
                ease: 'power2.out',
                onUpdate: () => {
                camera.lookAt(controls.target);
                controls.update();
                },
            });
            }

        // Handle click events only on hotspot zones
        const onClick = (event: MouseEvent) => {
            if (!canvasRef.current) return;
            const rect = canvasRef.current.getBoundingClientRect();

            // Convert mouse click to normalized device coordinates
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);

            // Only check hotspot objects
            const intersects = raycaster.intersectObjects(clickableParts, false);
            if (intersects.length > 0) {
                controls.autoRotate = false;
                controls.update();             // Apply any pending rotations
                const targetPoint = intersects[0].point;
                smoothZoomTo(targetPoint, 0.95, 1.2)
                setTimeout(() => {
                    controls.autoRotate = true;
                }, 14000);
            }
        };

        // Add event listener
        renderer.domElement.addEventListener("click", onClick);

        

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
