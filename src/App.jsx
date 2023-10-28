import NavigationBar from "./components/NavigationBar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <div className=" flex">
        {/* navigation bar */}
        <NavigationBar />

        {/* main */}
        <main className=" flex flex-grow">
          <Dashboard />
        </main>
      </div>
    </>
  );
}

export default App;
