import { Link } from 'react-router-dom';
import Card from '../Component/Shared/Card';
import './About.scss'


function AboutPage() {
  return (
    <div className="container">
      <Card>
        <div className='about'>
          <h1>About This Project</h1>
          <p>
            This is a React functional component-based application to leave
            feedback for a product or service.
          </p>

          <div className="project-details">
            <h3>Features:</h3>
            <ul>
              <li>Full CRUD functionality with Context API</li>
              <li>Mock REST API integration with JSON Server</li>
              <li>Responsive design using SCSS</li>
              <li>Animations with Framer Motion</li>
            </ul>
          </div>

          <p><strong>Version:</strong> 1.0.0</p>

          <p>
            <Link to='/' className='back-link'>
              Back To Home
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}

export default AboutPage;