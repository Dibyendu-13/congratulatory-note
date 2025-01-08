# Wedding Planner UI

A React-based user interface for a Wedding Planner application that showcases elegant animations, transitions, and a polished design. The app switches between two main components with a seamless transition.

---

## Features

- **Timed Component Switching**: Automatically switches from `WeddingPlannerUI` to `WeddingPlannerUI2` after 5 seconds.
- **Envelope Animation**: A visually engaging animation where an envelope opens to reveal a congratulatory message.
- **Wedding Proposal Page**: Displays a professional wedding planning offer with elegant cards and a call-to-action button.
- **Framer Motion Integration**: Adds smooth animations and transitions for a dynamic user experience.
- **Responsive Design**: The layout adapts beautifully to different screen sizes.

---

## Components

### 1. `WeddingPlannerUI`

- Displays an animated envelope with a congratulatory message.
- Utilizes `framer-motion` for the animations.

### 2. `WeddingPlannerUI2`

- Features a wedding decor image and a professional pitch for wedding planning services.
- Contains clickable cards and a "Get My FREE Proposal" button.

---

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

---

## Project Structure

```plaintext
src/
├── components/
│   ├── WeddingPlannerUI.jsx
│   ├── WeddingPlannerUI2.jsx
├── images/
│   ├── topImage.png
│   ├── image.png
├── App.css
├── App.jsx
└── index.js
```

---

## Dependencies

- **React**: UI library for building user interfaces.
- **Framer Motion**: Animation library for smooth transitions.
- **CSS**: Custom styles for design and layout.

---

## How It Works

1. **App Initialization**:

   - The `App` component initializes with the `WeddingPlannerUI` component displayed.

2. **Timed Transition**:

   - After 5 seconds, the app switches to `WeddingPlannerUI2`.

3. **Animations**:

   - Smooth animations are powered by `framer-motion`.

4. **User Interaction**:
   - The "Get My FREE Proposal" button and cards in `WeddingPlannerUI2` are interactive.

---

## Future Improvements

- Add more customizable options for weddings (e.g., themes, locations, vendors).
- Implement a backend to handle user proposals and data.
- Enhance mobile responsiveness and optimize performance.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- Inspired by the elegance and joy of wedding celebrations.
- Animations crafted using `framer-motion` for a delightful user experience.
