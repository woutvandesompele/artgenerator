import create from 'zustand'

const useStore = create(set => ({
    switchCircles: false,
    setSwitchCircles: () => set(state => ({ switchCircles: !state.switchCircles })),
    switchColors: false,
    setSwitchColors: () => set(state => ({ switchColors: !state.switchColors })),
    switchBackground: false,
    setSwitchBackground: () => set(state => ({ switchBackground: !state.switchBackground })),
    size: 8,
    setSize: (size) => set(state => ({ size })),
    color: "#2F30d0",
    setGradient1: (gradient1) => set(state => ({ gradient1 })),
    gradient1: "#fbeee0",
    setGradient2: (gradient2) => set(state => ({ gradient2 })),
    gradient2: "#fbeee0",
    setColor: (color) => set(state => ({ color })),
    colorPalette: "Bold",
    setColorPalette: (colorPalette) => set(state => ({ colorPalette })),







    // setSize: (size) => set(state => ({ size })),
    // showDislikes: false,
    // toggleShowDislikes: () => set(state => ({ showDislikes: !state.showDislikes })),
    // name: "James",
    // setName: (name) => set(state => ({ name })),
    // dishes: [
    // { name: "Coffee", eaten: 100, like: true },
    // { name: "Mars bar", eaten: 3, like: true },
    // { name: "Lasagna", eaten: 10, like: true },
    // { name: "Soup", eaten: 1, like: false },
    // { name: "Protomolecule", eaten: 1, like: false },
    // { name: "Onion rings", eaten: 5, like: false },
    // ],
    // addDish: (dish) => set(state => ({ dishes: [...state.dishes, dish] })),
    // eatDish: (dish) => set(state => {
    // const tmp = [...state.dishes];
    // const index = tmp.findIndex((check) => check.name === dish.name);
    // tmp[index] = { ...dish, eaten: dish.eaten + 1 };
    // return { ...state, dishes: tmp };
    // })
}))

export { useStore }