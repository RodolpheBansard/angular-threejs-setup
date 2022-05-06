import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import * as THREE from 'three'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('webgl')
  private canvasRef!: ElementRef;


  ngAfterViewInit(): void {
    // scene
    const scene = new THREE.Scene();

    // green cube
    const geometry = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshBasicMaterial({color:0x00ff00});
    const mesh = new THREE.Mesh(geometry,material);
    scene.add(mesh);

    // camera
    const sizes = {
      width:800,
      height:600
    };
    const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height);
    camera.position.z = 3;
    camera.position.y = 1;
    camera.position.x = 1;
    scene.add(camera);

    //renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: this.canvasRef.nativeElement
    });
    renderer.setSize(sizes.width,sizes.height);
    renderer.render(scene,camera);
  }
}
