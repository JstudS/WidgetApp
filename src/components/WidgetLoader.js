import React, { Suspense, lazy, useMemo } from "react";

const loadWidget = (widgetName) => {
  return lazy(() => import(`../widgets/${widgetName}.js`));
};

const WidgetLoader = ({ widgetName }) => {
  const LazyWidget = useMemo(() => loadWidget(widgetName), [widgetName]);

  return (
    <Suspense fallback={<div>Завантаження віджета...</div>}>
      <LazyWidget />
    </Suspense>
  );
};

export default WidgetLoader;