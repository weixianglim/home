import React, { forwardRef } from 'react';
import "../../../App.css"
import ProjectEntry from "../ProjectEntry"

// Import images
import BannerImg from "../../../images/Projects/MindOverMatter/TitleScreen.gif"

// Forward ref is used to propagate the element up to the parent.
// Currently used to scroll from navbar to this element.
const MindOverMatter = forwardRef((props, ref) => 
{
    // Project title
    const projectTitle = "Mind Over Matter";

    // Will be passed into ProjectEntry via the render callback
    const renderObj = (
        <React.Fragment>
            <h1>{projectTitle}</h1>
            <h2>Development Process</h2>
            <p>
                I'm still in the midst of revamping my website, stay tuned!
            </p>
        </React.Fragment>
    );

    // Delegate rendering to ProjectEntry component
    return (
        <ProjectEntry ref={ref} contentCallback={() => renderObj} 
        bannerImg={BannerImg} fadeScreen={true} 
        projectPrimaryTitle={projectTitle}
        btnText="Development Process"/>
    );
})

export default MindOverMatter;