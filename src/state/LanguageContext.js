import React from 'react';
import translations from '../assets/locales/locale';

export const LanguageContext = React.createContext();

class LanguageProvider extends React.Component {
    constructor(props) {
        super(props);
        this.changeLanguage=this.changeLanguage.bind(this);
    }
    
    componentDidUpdate(){
        this.time=this.props.lang.local;
    }
  
    
    changeLanguage = (language) => {
            this.setState({ language, translations: translations[language] })
    }
    render() {
        return (
                <LanguageContext.Provider
                value={{
                    
                    ...this.state= {
                        language: this.time,
                        translations: 
                        this.time=='pt_PT' ?
                         translations.pt_PT
                         :
                         this.time=='en_US' && translations.en_US
                    },
                    changeLanguage: this.changeLanguage
                }}
            >
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}
export default LanguageProvider;