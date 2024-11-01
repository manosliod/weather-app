# **Weather App**

A responsive weather dashboard that displays detailed weather information along with navigation and customizable settings. This app leverages **Mantine UI** for styling and responsive layouts, providing an optimized experience across devices.

## **Project Structure**

The project is organized into folders to ensure a clean, modular, and scalable codebase.


```
src
├── assets              # Static assets such as images
├── components
│   ├── base            # Layout components, like sidebars and main layout
│   └── shared          # Shared components used throughout the app
├── data                # Static data for the application
│   └── weather         # Weather-related data (e.g., forecasts, air conditions)
├── providers           # Context providers for global state management
└── index.css           # Global CSS
```

## **Folder Descriptions**

### **components**

This folder contains the primary components of the app, divided into subfolders for layout and reusable UI elements.

#### **base**
Houses layout components that structure the main page.

- **`BaseLayout.tsx`**: Organizes the overall page layout with left and right sidebars for desktop and a responsive mobile-friendly layout.
- **`LeftSidebar.tsx`**: Displays user profile information and navigation options like **Weather**, **Explore**, **Cities**, and **Settings**.
- **`RightSidebar.tsx`**: Provides weather-related data such as the weekly forecast, current time, and air conditions.

These layout components ensure consistent structure throughout the app and allow for easy customization of the sidebars and main content area.

#### **Weather Display Components**

- **`Activities.tsx`**, **`Forecast.tsx`**, **`WeatherInfo.tsx`**: Display specific weather details, including daily forecasts, current conditions, and other insights.

### **components/shared**

The `shared` folder holds reusable components that can be used across different sections of the app.

- **`MyCard.tsx`**: A customizable card component with a frosted glass effect, providing a consistent UI container for weather data and navigation.
- **`WeeklyForecast.tsx`**: Renders the weekly forecast using a carousel layout, offering users a scrollable view of upcoming weather.

These components help maintain a unified look and feel while simplifying the development of new features.

### **data**

The `data` folder contains static data files, used to simulate API responses during development. Data is organized by feature.

- **`weather`**: Contains weather-related mock data files, including:
    - **`forecast.ts`**: Provides mock forecast data.
    - **`airConditions.ts`**: Includes air quality and related metrics.
    - **`activities.ts`**: Suggests activities based on weather conditions.

### **providers**

This folder includes context providers for managing global application state. For example, you might add providers for theming, user authentication, or API data.

## **Usage**

1. **Clone the repository**:

    ```bash
    git clone https://github.com/manosliod/weather-app.git
    cd weather-app 
    ```
1. Install dependencies using ```npm install```. 
2. Run the application with ```npm start```.


## **Tech Stack**

- React: Core library for building UI components.
- Mantine UI: Provides component styling, themes, and responsive design.
- TypeScript: Ensures type safety, leading to more reliable code.

## **Responsive Design**

The app uses __Mantine's__ ```useMediaQuery``` hook to conditionally render sidebars and other layout elements based on screen size. The layout adjusts dynamically:

- __Desktop View:__ Displays left and right sidebars with detailed weather data and navigation.
- __Mobile View:__ Condenses the layout to optimize usability on smaller screens, displaying only essential components.
