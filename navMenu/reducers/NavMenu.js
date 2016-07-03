const initialState = {
    'navMenuTabsState': [
        {
            name: 'Tab1',
            content: 'Tab1 Content'
        },
    {
        name: 'Tab2',
            content: 'Tab2 Content'
    },
    {
        name: 'Tab3',
            content: 'Tab3 Content'
    },
    {
        name: 'Tab4',
            content: 'Tab4 Content'
    },
    {
        name: 'Tab5',
            content: 'Tab5 Content'
    }
    ]
};
export default function NavMenuReduce (state = initialState){
    return state;
}
