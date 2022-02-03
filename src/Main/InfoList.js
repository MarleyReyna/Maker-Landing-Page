import passions from './Images/illustration-passions.svg'
import lifestyle from './Images/illustration-lifestyle.svg'
import financial from './Images/illustration-financial-freedom.svg'
import work from './Images/illustration-work-anywhere.svg'

const InfoList = [
     {
        class: 'passion',
         picture: passions,
         title: 'Indulge your passions',
         para: "Your passions shouldn't be just for the weekend. Earn a living doing what you love."
     },
    {
        class: 'finance',
        picture: financial,
        title: 'Gain financial freedom',
        para: 'Start making money work for you. There’s nothing quite like earning while you sleep. '
    },
    {
        class: 'lifestyle',
        picture: lifestyle,
        title: 'Choose your lifestyle',
        para: 'Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.'
    },
    {
        class: 'work',
        picture: work,
        title: 'Work from anywhere',
        para: 'Selling online means not being pinned down. Want to work AND travel? Go for it!'
    }
]

export default InfoList;