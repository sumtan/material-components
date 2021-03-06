import Component from 'vue-class-component';

import mdButton from '../../../components/button';
import mdModal from '../../../components/modal';

import events from '../../../mixins/events';

@Component({
    components: {
        mdButton,
        mdModal
    },
    mixins: [
        events
    ],
    template: require('./default.html')
})
export default class DefaultModal {
    data() {
        return {
            closeResult: ''
        }
    }
}

