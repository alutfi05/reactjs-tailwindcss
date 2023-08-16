const Button = (props) => {
  const { variant = 'bg-black', children = '...' } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

const App = () => {
  return (
    <div className="flex justify-center bg-slate-100 min-h-screen items-center">
      <div className="flex gap-x-3">
        <Button variant="bg-red-500">Login</Button>
        <Button variant="bg-slate-500">Logout</Button>
        <Button></Button>
      </div>
    </div>
  );
};

export default App;
