const projects = document.getElementsByClassName("project");
const projects_arr = Array.from(projects); // Done to prevent forEach() "not a function" issues

projects_arr.forEach(project => {
    // Reset if mouse not over project
    project.addEventListener('mouseout', () => {
        project.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
    });
    
    // Shrink to simulate clicking on project
    project.addEventListener('mousedown', () => {
        project.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)';
    });
    
    // Expand to simulate releasing mouse button
    project.addEventListener('mouseup', () => {
        project.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)';
    });
});


// Get width and height of an element (all elements are the same size)
const project_width = projects[0].clientWidth;
const project_height = projects[0].clientHeight;

const handleMove = (e) => {
    /* Get current cursor position 
     * with respect to the element 
     * on mouseover */
    const x_position = e.layerX
    const y_position = e.layerY
    const rotation_magnitude = 10;

    /* Calculate rotation values along the Y-axis */
    const y_rotation = rotation_magnitude * ((x_position - project_width / 2) / project_width)

    /* Calculate the rotation along the X-axis */
    const x_rotation = (-1 * rotation_magnitude) * ((y_position - project_height / 2) / project_height)

    /* Apply the calculated transformation */
    e.currentTarget.style.transform = 'perspective(500px) scale(1.1) rotateX(' + x_rotation + 'deg) rotateY(' + y_rotation + 'deg)';
}

projects_arr.forEach(project => {
    // Apply 3D movement effect when moving mouse
    project.addEventListener('mousemove', handleMove);
});
