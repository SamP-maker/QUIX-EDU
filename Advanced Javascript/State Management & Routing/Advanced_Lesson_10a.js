// ========================================
// Module 10: State Management & Routing
// ========================================
// - Lifting state in React
// - Prop drilling and Context basics
// - React Router: useNavigate, useParams
// - Hands-on: Blog viewer app with routes




//"Lifting state" means moving shared state up to the closest common ancestor so multiple components can access or update it.

function Parent() {
  const [text, setText] = useState("");

  return (
    <>
      <Input value={text} setValue={setText} />
      <Display value={text} />
    </>
  );
}
