define(['fps_controls', '../objects/camera'], function (THREE, camera) {


    var camControls           = new THREE.FirstPersonControls(camera);
    camControls.lookSpeed     = 0.4;
    camControls.movementSpeed = 5;
    camControls.noFly         = true;
    camControls.lookVertical  = true;
    return camControls;
});