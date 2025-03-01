# 🍳 Recipe App

A delicious web application built with React.js that helps you discover recipes from around the world!

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://recipe-app-ck-rakulck.vercel.app/)

## ✨ Features

- **Popular Recipes** - Discover trending recipes from different cuisines
- **Ingredient Search** - Find recipes based on specific ingredients you have
- **Detailed Recipe View** - Get complete instructions and ingredient lists
- **Responsive Design** - Works perfectly on desktop and mobile devices
- **Fast Performance** - Built with React.js for a smooth user experience

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **CSS3** - Styling and animations
- **Spoonacular API** - Recipe data source
- **Vercel** - Deployment platform

## 📱 Screenshots

<div align="center">
  <p><strong>Homepage with Popular Recipes</strong></p>
  <img width="1280" alt="Homepage showing popular recipes" src="https://user-images.githubusercontent.com/77563090/181884285-5874b270-b74d-41f5-b633-a2e7dfb3111f.png">
  <br><br>
  
  <p><strong>Cuisine Categories</strong></p>
  <img width="1280" alt="Cuisine categories selection" src="https://user-images.githubusercontent.com/77563090/181884582-660eecae-0faf-4254-a3c8-601c17662f8d.png">
  <br><br>
  
  <p><strong>Recipe Search Results</strong></p>
  <img width="1280" alt="Search results for recipes" src="https://user-images.githubusercontent.com/77563090/181884807-1e03a8c3-7454-4405-9cbf-359e26f9e416.png">
  <br><br>
  
  <p><strong>Detailed Recipe View</strong></p>
  <img width="788" alt="Detailed recipe instructions and ingredients" src="https://user-images.githubusercontent.com/77563090/181885174-2f3eed73-a512-4422-9e24-2d560c04199c.png">
</div>

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Mhdd-24/Recipe-App.git

# Navigate to project directory
cd recipe-app

# Install dependencies
npm install
# or
yarn install

# Start development server
npm start
# or
yarn start
```

Visit `http://localhost:3000` to see the app running in development mode.

### Environment Variables
Create a `.env` file in the root directory with the following:
```
REACT_APP_API_KEY=your_spoonacular_api_key
```

## 🔍 How to Use

1. **Browse Popular Recipes**: Scroll through the homepage to see trending recipes
2. **Search by Ingredient**: Use the search bar to find recipes with specific ingredients
3. **Filter by Cuisine**: Click on cuisine categories to find region-specific dishes
4. **View Recipe Details**: Click on any recipe card to see detailed instructions and ingredients

## 🌟 Key Features Explained

### Recipe Search Algorithm
The app uses a sophisticated algorithm to match your ingredient search with relevant recipes, prioritizing recipes that use more of your specified ingredients.

### Responsive Design
The UI automatically adapts to different screen sizes, providing an optimal experience whether you're cooking with your phone, tablet, or desktop computer.

### Cuisine Filtering
Discover authentic dishes from Italian, Mexican, Indian, Japanese, Thai, and many more cuisines with our curated category filters.

## 🔮 Future Enhancements

- User accounts to save favorite recipes
- Meal planning and grocery list generation
- Dietary restriction filters (vegan, gluten-free, etc.)
- Recipe rating and review system
- Social sharing functionality

## 👨‍💻 Development

### Project Structure
```
recipe-app/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── App.js
│   └── index.js
└── package.json
```

### API Integration
This project uses the Spoonacular API to fetch recipe data. The integration is handled in the `utils/api.js` file.

## 📃 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- [Live Demo](https://recipe-app-ck-rakulck.vercel.app/)
- [GitHub Repository](https://github.com/Mhdd-24/Recipe-App.git)

---

<p align="center">
  <i>Find and cook your favorite dishes with just a few clicks!</i>
</p>