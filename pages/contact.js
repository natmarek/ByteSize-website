import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import PageLayout from '../components/layouts/PageLayout'
import ContactInfo from '../components/contactInfo'


export default function contact() {
    return (
        <BaseLayout>
            <PageLayout>
                <ContactInfo/>
                
            </PageLayout>
            
        </BaseLayout>
    )
}
