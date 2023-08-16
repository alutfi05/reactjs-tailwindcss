import Button from './components/Elements/Button';

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <div className="flex gap-x-3">
        <Button variant="bg-red-500">Login</Button>
        <Button variant="bg-slate-500">Logout</Button>
        <Button></Button>
      </div>
    </div>
  );
};

export default App;
