import './content.css';
import React from 'react';
import Section from '../section/section';



const  content = (props) =>  {
    return (<div className="section__content">
              <Section title="SPRING BOOT" name="icon__logo__1" text ="Takes an opinionated 
              view of building Spring applications and gets you up and running as quickly as 
              possible."/>  
              <Section title="SPRING FRAMEWORK" name="icon__logo__2" text ="Provides core 
              support for dependency injection, transaction management, web apps, data access,
               messaging and more."/> 
              <Section title="SPRING CLOUD DATA FLOW" name="icon__logo__3" text ="An 
              orchestration service for composable data microservice applications on modern runtimes."/> 
              <Section title="SPRING CLOUD" name="icon__logo__4" text ="Provides a set of tools for 
              common patterns in distributed systems. Useful for building and deploying microservices."/> 
              <Section title="SPRING DATA" name="icon__logo__5" text ="Provides a set of tools 
              for common patterns in distributed systems. Useful for building and deploying microservices."/> 
              <Section title="SPRING INTEGRATION" name="icon__logo__6" text ="Supports the 
              well-known Enterprise Integration Patterns via lightweight messaging and declarative 
              adapters."/> 
            </div>
    )
}

export default content;