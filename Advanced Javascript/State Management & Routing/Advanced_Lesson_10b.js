// ========================================
// Module 10: State Management & Routing
// ========================================
// - Lifting state in React
// - Prop drilling and Context basics
// - React Router: useNavigate, useParams
// - Hands-on: Blog viewer app with routes



/*

Prop drilling: passing data through many layers of components, even if some layers don’t use it. This becomes hard to manage.

React Context helps avoid that.


*/

// 1. Create Context
const ThemeContext = createContext();

// 2. Provide it
<ThemeContext.Provider value={"dark"}>
  <App />
</ThemeContext.Provider>

// 3. Consume it
const theme = useContext(ThemeContext);
