import Header from "./components/Header.js";

const App = () => {
  return (
    <div>
      <Header />
      <div class="grid grid-cols-5 gap-3">
        <div class="bg-blue-100">1st col</div>
        <div class="bg-red-100 col-span-4">2nd col</div>
      </div>
    </div>
  );
};

export default App;
