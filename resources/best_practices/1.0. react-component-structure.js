// 1. Imports
import { useState, useEffect, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import "./Component.css";


// 2. Constants (outside component if static)
const MAX_ITEMS = 10;


// 3. Component
export default function MyComponent({ title }) {
  

  // 4. Hooks (ALWAYS top-level, never inside conditions)
  

  // 4.1 State hooks
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);


  // 4.2 Ref hooks
  const listRef = useRef(null);


  // 4.3 Derived state (memoized values)
  const itemCount = useMemo(() => items.length, [items]);


  // 4.4 Callbacks (memoized functions)
  const handleAddItem = useCallback(() => {
    setItems(prev => [...prev, "New Item"]);
  }, []);


  // 4.5 Effects (side effects LAST among hooks)
  useEffect(() => {
    setLoading(true);
    // simulate fetch
    setTimeout(() => setLoading(false), 1000);
  }, []);


  // 5. Helper functions (non-hook logic)
  function renderItems() {
    return items.map((item, index) => (
      <li key={index}>{item}</li>
    ));
  }


  // 6. Early returns (guard clauses)
  if (loading) return <p>Loading...</p>;


  // 7. Main render
  return (
    <div>
      <h1>{title}</h1>
      <p>Total: {itemCount}</p>
      <button onClick={handleAddItem}>Add Item</button>
      <ul ref={listRef}>{renderItems()}</ul>
    </div>
  );
}


// 8. PropTypes / Types
MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
};




