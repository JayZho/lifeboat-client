import { PointMaterial, Points } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";
import { RawShaderMaterial } from "three";

const generateStarsGeo = function (amount, height_angle) {
    const radius = 152;

    const random_geo = new THREE.BufferGeometry();
    const positions = new Float32Array(amount * 3);
    for (let i = 0; i < amount; i++) {
        const index = i * 3;
        // random horizontal and vertical angles
        const hor_angle = Math.random() * Math.PI;
        const vert_angle = Math.random() * height_angle;

        // random 3d positions
        const x = Math.cos(hor_angle) * radius * Math.cos(vert_angle);
        const z = - Math.sin(hor_angle) * radius * Math.cos(vert_angle);
        const y = Math.sin(vert_angle) * radius;
        positions[index] = x;
        positions[index + 1] = y;
        positions[index + 2] = z;
        // console.log([x, y, z]);
    }

    // specify positions and colors attributes
    random_geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return random_geo;
}


export function Stars() {
    const star_geo = useMemo(() => {
        return generateStarsGeo(100, Math.PI / 3);
    }, []);

    const star_mat = useMemo(() => {
        const tex_loader = new THREE.TextureLoader();
        const checker_tex = tex_loader.load("/stars_alpha.png");
        const mat = new THREE.PointsMaterial({ color: 0xffffff });
        mat.size = 4;
        mat.sizeAttenuation = true;
        mat.alphaMap = checker_tex;
        mat.alphaTest = 0.02;

        mat.transparent = true;
        mat.opacity = 0.99;
        mat.depthWrite = false;
        return mat;
    }, []);

    return (
        <points geometry={star_geo} material={star_mat} />
    )
}