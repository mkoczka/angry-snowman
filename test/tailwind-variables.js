module.exports = {
    'colors': {
        'semantic': {
            'Primary': 'var(--color-semantic-primary)', /* Primary interactive color */
            'Success': 'var(--color-semantic-success)', /* Success states, Confirm actions */
            'Critical': 'var(--color-semantic-critical)', /* Failure states, actions which can not be undone */
            'Warning': 'var(--color-semantic-warning)', /* Use when something is wrong but not critical */
            'Upgrade': 'var(--color-semantic-upgrade)', /* ✏ Use for upgrading plan */
        },
        'states': {
        },
        'semantic': {
            'Primary Dark': 'var(--color-states-semantic-primary-dark)', 
            'Primary Light': 'var(--color-states-semantic-primary-light)', 
            'Success Dark': 'var(--color-states-semantic-success-dark)', 
            'Success Light': 'var(--color-states-semantic-success-light)', 
            'Critical Dark': 'var(--color-states-semantic-critical-dark)', 
            'Critical Light': 'var(--color-states-semantic-critical-light)', 
            'Warning Dark': 'var(--color-states-semantic-warning-dark)', 
            'Warning Light': 'var(--color-states-semantic-warning-light)', 
            'Upgrade Light': 'var(--color-states-semantic-upgrade-light)', 
            'Upgrade Dark': 'var(--color-states-semantic-upgrade-dark)', 
        },
        'light': {
            'Background Primary Dark': 'var(--color-states-light-background-primary-dark)', 
            'Background Success Dark': 'var(--color-states-light-background-success-dark)', 
            'Background Critical Dark': 'var(--color-states-light-background-critical-dark)', 
            'Background Warning Dark': 'var(--color-states-light-background-warning-dark)', 
            'Background Upgrade Dark': 'var(--color-states-light-background-upgrade-dark)', 
        },
        'on light': {
            'Foreground Black': 'var(--color-on-light-foreground-black)', /* 
                                                       ⚪️ Use only on LIGHT Background
                                                       
                                                       ✏️ Headings */
            'Foreground 01': 'var(--color-on-light-foreground-01)', /* 
                                                       ⚪️ Use only on LIGHT Background
                                                       
                                                       ✏️ Primary texts, Icons */
            'Foreground 02': 'var(--color-on-light-foreground-02)', /* 
                                                       ⚪️ Use only on LIGHT Background
                                                       
                                                       ✏️ Only for hover of Foreground 03 */
            'Foreground 03': 'var(--color-on-light-foreground-03)', /* 
                                                       ⚪️ Use only on LIGHT Background
                                                       
                                                       ✏️ Secondary texts, Icons */
            'Foreground 04': 'var(--color-on-light-foreground-04)', /* 
                                                       ⚪️ Use only on LIGHT Background
                                                       
                                                       ✏️ Placeholders, Disabled texts, Default Icon color if alone */
        },
        'border': {
            'Low Contrast': 'var(--color-on-light-border-low-contrast)', /* 
                                                       ⚪️ Use on LIGHT Background
                                                       
                                                       ✏️ Dividers, Disabled Borders, Structural layout */
            'Medium Contrast': 'var(--color-on-light-border-medium-contrast)', /* 
                                                       ⚪️ Use on LIGHT Background
                                                       
                                                       ✏️ Dividers, Borders, Structural layout */
            'High Contrast': 'var(--color-on-light-border-high-contrast)', 
        },
        'on dark': {
            'Foreground White': 'var(--color-on-dark-foreground-white)', 
            'Foreground 01': 'var(--color-on-dark-foreground-01)', 
            'Foreground 02': 'var(--color-on-dark-foreground-02)', 
            'Foreground 03': 'var(--color-on-dark-foreground-03)', 
        },
        'border': {
            'White': 'var(--color-on-dark-border-white)', 
            'Low Contrast': 'var(--color-on-dark-border-low-contrast)', /* 
                                                       ⚫️ Use on DARK Background
                                                       
                                                       ✏️ Dividers, Layout structure */
            'High Contrast': 'var(--color-on-dark-border-high-contrast)', /* 
                                                       ⚫️ Use on DARK Background
                                                       
                                                       ✏️ Dividers, Input borders, Layout structure */
        },
        'light': {
            'Background White': 'var(--color-light-background-white)', /* ✏️ Only for neutral backgrounds */
            'Background 01': 'var(--color-light-background-01)', /* ✏️ Only for neutral backgrounds */
            'Background 02': 'var(--color-light-background-02)', /* ✏️ Only for neutral backgrounds */
            'Background 03': 'var(--color-light-background-03)', /* ✏️ Only for neutral backgrounds */
            'Background Primary': 'var(--color-light-background-primary)', /* ✏️ Only for primary backgrounds */
            'Background Success': 'var(--color-light-background-success)', /* ✏️ Only for success backgrounds */
            'Background Critical': 'var(--color-light-background-critical)', /* ✏️ Only for critical backgrounds */
            'Background Warning': 'var(--color-light-background-warning)', /* ✏️ Only for warning backgrounds */
            'Background Upgrade': 'var(--color-light-background-upgrade)', /* ✏️ Only for upgrade plan backgrounds */
        },
        'dark': {
            'Background Black': 'var(--color-dark-background-black)', /* ✏️ Only for neutral backgrounds */
            'Background 01': 'var(--color-dark-background-01)', /* ✏️ Only for neutral backgrounds */
            'Background 02': 'var(--color-dark-background-02)', /* ✏️ Only for neutral backgrounds */
            'Background 03': 'var(--color-dark-background-03)', /* ✏️ Only for neutral backgrounds */
            'Background 04': 'var(--color-dark-background-04)', 
        },
        'special': {
            'Blanket': 'var(--color-special-blanket)', 
            'Blanket Dark': 'var(--color-special-blanket-dark)', 
            'Lighter Transparent Border': 'var(--color-special-lighter-transparent-border)', 
            'Darker Transparent Border': 'var(--color-special-darker-transparent-border)', 
            'Lighter Transparent Hover': 'var(--color-special-lighter-transparent-hover)', 
            'Darker Transparent Hover': 'var(--color-special-darker-transparent-hover)', 
            'Token Thumbnail Border on LIGHT': 'var(--color-special-token-thumbnail-border-on-light)', 
            'Token Thumbnail Border on DARK': 'var(--color-special-token-thumbnail-border-on-dark)', 
            'Primary Transparent Select': 'var(--color-special-primary-transparent-select)', 
            'Primary Transparent Light': 'var(--color-special-primary-transparent-light)', 
            'Inline Code Background': 'var(--color-special-inline-code-background)', 
        },
        'base': {
        },
        'white': {
            '0': 'var(--color-base-white-0)', /* Same as Primary/white */
        },
        'grey': {
            '5': 'var(--color-base-grey-5)', 
            '10': 'var(--color-base-grey-10)', 
            '20': 'var(--color-base-grey-20)', 
            '30': 'var(--color-base-grey-30)', 
            '40': 'var(--color-base-grey-40)', 
            '50': 'var(--color-base-grey-50)', 
            '60': 'var(--color-base-grey-60)', 
            '70': 'var(--color-base-grey-70)', 
            '80': 'var(--color-base-grey-80)', 
            '90': 'var(--color-base-grey-90)', 
            '95': 'var(--color-base-grey-95)', 
            '100': 'var(--color-base-grey-100)', /* Same as Primary/sn-black */
        },
        'yellow': {
            '5': 'var(--color-base-yellow-5)', 
            '10': 'var(--color-base-yellow-10)', 
            '20': 'var(--color-base-yellow-20)', 
            '30': 'var(--color-base-yellow-30)', 
            '40': 'var(--color-base-yellow-40)', 
            '50': 'var(--color-base-yellow-50)', 
            '60': 'var(--color-base-yellow-60)', 
            '70': 'var(--color-base-yellow-70)', 
            '80': 'var(--color-base-yellow-80)', 
            '90': 'var(--color-base-yellow-90)', 
            '95': 'var(--color-base-yellow-95)', 
            '100': 'var(--color-base-yellow-100)', 
        },
        'orange': {
            '5': 'var(--color-base-orange-5)', 
            '10': 'var(--color-base-orange-10)', 
            '20': 'var(--color-base-orange-20)', 
            '30': 'var(--color-base-orange-30)', 
            '40': 'var(--color-base-orange-40)', 
            '50': 'var(--color-base-orange-50)', 
            '60': 'var(--color-base-orange-60)', 
            '70': 'var(--color-base-orange-70)', 
            '80': 'var(--color-base-orange-80)', 
            '90': 'var(--color-base-orange-90)', 
            '95': 'var(--color-base-orange-95)', 
            '100': 'var(--color-base-orange-100)', 
        },
        'pink': {
            '5': 'var(--color-base-pink-5)', 
            '10': 'var(--color-base-pink-10)', 
            '20': 'var(--color-base-pink-20)', 
            '30': 'var(--color-base-pink-30)', 
            '40': 'var(--color-base-pink-40)', 
            '50': 'var(--color-base-pink-50)', 
            '60': 'var(--color-base-pink-60)', 
            '70': 'var(--color-base-pink-70)', 
            '80': 'var(--color-base-pink-80)', 
            '90': 'var(--color-base-pink-90)', 
            '95': 'var(--color-base-pink-95)', 
            '100': 'var(--color-base-pink-100)', 
        },
        'purple': {
            '5': 'var(--color-base-purple-5)', 
            '10': 'var(--color-base-purple-10)', 
            '20': 'var(--color-base-purple-20)', 
            '30': 'var(--color-base-purple-30)', 
            '40': 'var(--color-base-purple-40)', 
            '50': 'var(--color-base-purple-50)', 
            '60': 'var(--color-base-purple-60)', 
            '70': 'var(--color-base-purple-70)', /* Use for icons and badges */
            '80': 'var(--color-base-purple-80)', /* Use for background with white text */
            '90': 'var(--color-base-purple-90)', /* Use for icons */
            '95': 'var(--color-base-purple-95)', /* Use for text and icons */
            '100': 'var(--color-base-purple-100)', /* Use for text and icons */
        },
        'green': {
            '5': 'var(--color-base-green-5)', 
            '10': 'var(--color-base-green-10)', 
            '20': 'var(--color-base-green-20)', 
            '30': 'var(--color-base-green-30)', 
            '40': 'var(--color-base-green-40)', 
            '50': 'var(--color-base-green-50)', 
            '60': 'var(--color-base-green-60)', 
            '70': 'var(--color-base-green-70)', 
            '80': 'var(--color-base-green-80)', 
            '90': 'var(--color-base-green-90)', 
            '95': 'var(--color-base-green-95)', 
            '100': 'var(--color-base-green-100)', 
        },
        'teal': {
            '5': 'var(--color-base-teal-5)', 
            '10': 'var(--color-base-teal-10)', 
            '20': 'var(--color-base-teal-20)', 
            '30': 'var(--color-base-teal-30)', 
            '40': 'var(--color-base-teal-40)', 
            '50': 'var(--color-base-teal-50)', 
            '60': 'var(--color-base-teal-60)', 
            '70': 'var(--color-base-teal-70)', 
            '80': 'var(--color-base-teal-80)', 
            '90': 'var(--color-base-teal-90)', 
            '95': 'var(--color-base-teal-95)', 
            '100': 'var(--color-base-teal-100)', 
        },
        'red': {
            '5': 'var(--color-base-red-5)', 
            '10': 'var(--color-base-red-10)', 
            '20': 'var(--color-base-red-20)', 
            '30': 'var(--color-base-red-30)', 
            '40': 'var(--color-base-red-40)', 
            '50': 'var(--color-base-red-50)', 
            '60': 'var(--color-base-red-60)', /* Same as Accent/sn-red */
            '70': 'var(--color-base-red-70)', 
            '80': 'var(--color-base-red-80)', 
            '90': 'var(--color-base-red-90)', 
            '95': 'var(--color-base-red-95)', 
            '100': 'var(--color-base-red-100)', 
        },
        'blue': {
            '5': 'var(--color-base-blue-5)', 
            '10': 'var(--color-base-blue-10)', 
            '20': 'var(--color-base-blue-20)', 
            '30': 'var(--color-base-blue-30)', 
            '40': 'var(--color-base-blue-40)', 
            '50': 'var(--color-base-blue-50)', 
            '60': 'var(--color-base-blue-60)', 
            '70': 'var(--color-base-blue-70)', 
            '80': 'var(--color-base-blue-80)', 
            '90': 'var(--color-base-blue-90)', 
            '95': 'var(--color-base-blue-95)', 
            '100': 'var(--color-base-blue-100)', 
        },
        'dm gray': {
            '5': 'var(--color-base-dm-gray-5)', 
            '10': 'var(--color-base-dm-gray-10)', 
            '20': 'var(--color-base-dm-gray-20)', 
            '30': 'var(--color-base-dm-gray-30)', 
            '40': 'var(--color-base-dm-gray-40)', 
            '50': 'var(--color-base-dm-gray-50)', 
            '60': 'var(--color-base-dm-gray-60)', 
            '70': 'var(--color-base-dm-gray-70)', 
            '80': 'var(--color-base-dm-gray-80)', 
            '90': 'var(--color-base-dm-gray-90)', 
            '95': 'var(--color-base-dm-gray-95)', 
            '100': 'var(--color-base-dm-gray-100)', 
        },
        'code': {
            'Directly Exported': 'var(--color-code-directly-exported)', 
            'Keywords': 'var(--color-code-keywords)', 
            'Numbers': 'var(--color-code-numbers)', 
            'Strings': 'var(--color-code-strings)', 
            'Functions': 'var(--color-code-functions)', 
            'Methods': 'var(--color-code-methods)', 
            'Control Symbols': 'var(--color-code-control-symbols)', 
            'Code': 'var(--color-code-code)', 
            'Comment': 'var(--color-code-comment)', 
        },
        'autocomplete': {
            'Snippet Light': 'var(--color-autocomplete-snippet-light)', 
            'Snippet': 'var(--color-autocomplete-snippet)', 
            'Snippet Dark': 'var(--color-autocomplete-snippet-dark)', 
            'Variable Light': 'var(--color-autocomplete-variable-light)', 
            'Variable': 'var(--color-autocomplete-variable)', 
            'Variable Dark': 'var(--color-autocomplete-variable-dark)', 
            'Method Light': 'var(--color-autocomplete-method-light)', 
            'Method': 'var(--color-autocomplete-method)', 
            'Method Dark': 'var(--color-autocomplete-method-dark)', 
            'Transformer Light': 'var(--color-autocomplete-transformer-light)', 
            'Transformer': 'var(--color-autocomplete-transformer)', 
            'Transformer Dark': 'var(--color-autocomplete-transformer-dark)', 
        },
    },
    'boxShadow': {
        'Popup': 'var(--shadow-popup)', 
        'Hover-Small-Area': 'var(--shadow-hover-small-area)', 
        'Hover-Large-Area': 'var(--shadow-hover-large-area)', 
    }
}