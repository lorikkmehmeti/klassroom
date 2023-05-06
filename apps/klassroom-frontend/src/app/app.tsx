// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes, Link } from 'react-router-dom';
import { ButtonStyles } from '../style.css';

export function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <button className={ButtonStyles}>Start your assessment</button>
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
