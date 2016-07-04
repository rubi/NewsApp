const initialState = {
    'navMenuTabsState': [
        {
            name: 'Tab1',
            content: 'Tab1 Content',
            tabRelatedContentUrl: 'http://10.128.42.243:3000/api/newsTabList1'
        },
        {
            name: 'Tab2',
            content: 'Tab2 Content',
            tabRelatedContentUrl: 'http://10.128.42.243:3000/api/newsTabList2'
        },
        {
            name: 'Tab3',
            content: 'Tab3 Content',
            tabRelatedContentUrl: 'http://10.128.42.243:3000/api/newsTabList3'
        },
        {
            name: 'Tab4',
            content: 'Tab4 Content',
            tabRelatedContentUrl: 'http://10.128.42.243:3000/api/newsTabList4'
        },
        {
            name: 'Tab5',
            content: 'Tab5 Content',
            tabRelatedContentUrl: 'http://10.128.42.243:3000/api/newsTabList5'
        }
    ]
};
export default function NavMenuReduce (state = initialState){
    return state;
}
