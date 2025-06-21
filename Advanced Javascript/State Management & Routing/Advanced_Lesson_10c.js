// ========================================
// Module 10: State Management & Routing
// ========================================
// - Lifting state in React
// - Prop drilling and Context basics
// - React Router: useNavigate, useParams
// - Hands-on: Blog viewer app with routes


npm install react-router-dom




import { BrowserRouter, Routes, Route } from "react-router-dom";

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/blog/:id" element={<BlogPost />} />
  </Routes>
</BrowserRouter>




const { id } = useParams();  // Get dynamic route ID



const navigate = useNavigate();
navigate("/blog/123");


