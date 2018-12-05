import React, { Component } from 'react';

class LibraryCourse extends Component {
    render () {
        return (
            <div className="library-course">
             <label className="library-course__title">Problem Solving</label>
             {/* icon component */}
             {/* arrow component */}
             {/* action button component */}
             <div className="library-course__description">
                <label>Course Description</label>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis justo magna, non lobortis leo finibus nec. Nam non justo tincidunt urna mattis tempor aliquam vel magna. Nulla ornare erat ac sapien gravida, sit amet viverra lorem faucibus. Fusce viverra odio ut sodales placerat. Aliquam cursus porttitor ornare.</p>
             </div>
            </div>
        )
    }
}

export default LibraryCourse;