import WidgetManager from "./components/WidgetManager";
import WidgetProvider from "./components/WidgetProvider";

function App() {
  return (
    <WidgetProvider>
      <div>
        <h1>Динамічні віджети</h1>
        <WidgetManager />
      </div>
    </WidgetProvider>
  );
}

export default App;
