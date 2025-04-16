import React, { useState } from 'react'
import { useWidgetContext } from './WidgetProvider'
import WidgetLoader from './WidgetLoader'

const WidgetManager = () => {
    const { widgets ,addWidget, removeWidget } = useWidgetContext()
    const [widgetName, setWidgetName] = useState('')

    const generateWidgetId = () => {
        const lastId = Object.keys(widgets).length 
        return lastId + 1 
      }
    
      const handleAddWidget = () => {
        if (!widgetName) return
        const newId = generateWidgetId()
        addWidget(newId, widgetName)
        setWidgetName('')
      }

    const handleRemoveWidget = (id) => {
        removeWidget(id)
    }

    return (
        <div>
            <div>
                <select value={widgetName} onChange={(e) => setWidgetName(e.target.value)}>
                    <option value=""> Виберіть віджет </option>
                    <option value="WeatherWidget">WeatherWidget</option>
                </select>
                <button onClick={handleAddWidget} disabled={!widgetName}>
                    Добавити віджет
                </button>
            </div>
            <div>
                {Object.keys(widgets).map((id) => (
                    <div key={id}>
                        <button onClick={() => handleRemoveWidget(id)}>Видалити</button>
                        <WidgetLoader widgetName={widgets[id]} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WidgetManager