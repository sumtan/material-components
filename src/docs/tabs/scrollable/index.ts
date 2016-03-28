import Component from 'vue-class-component';

import mdTabs from '../../../components/tabs';
import mdTab from '../../../components/tab';

@Component({
    components: {
        mdTabs,
        mdTab,
    },
    template: require('./scrollable.html')
})
export default class ScrollableTabs {
}

