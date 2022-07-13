import { QueryClient, QueryClientProvider } from "react-query";
import { useGetProducts } from "./api/fake-db/fake-server";
import "./styles.css";

function App() {
  const { data } = useGetProducts();
  console.log(data);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const queryClient = new QueryClient();

export default function () {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}
