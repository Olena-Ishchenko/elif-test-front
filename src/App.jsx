import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Suspense, lazy } from "react";

const Events = lazy(() => import("./pages/EventsBoardPage/EventsBoardPage"));
const Registr = lazy(() =>
  import("./pages/EventRegistrationPage/EventRegistrationPage")
);
const View = lazy(() =>
  import("./pages/EventParticipantsPage/EventParticipantsPage")
);

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/events/:id/register" element={<Registr />} />
          <Route path="/events/:id/participants" element={<View />} />
          <Route path="*" element={<Events />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
