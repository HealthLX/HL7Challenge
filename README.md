# Patient Insight 1.0
CCD-CDA Rendering Tool


#Create custom filters

To create a new custom filter, edit the file public/scripts/filterGroups.js

Below is a sample skeleton of a filter. Add a block like this one for each new filter you would like to add.

filters["Fiter Name Goes Here"]=
{
    sections: [
    	codes.allergies,
        codes.medications,
        // more section codes...
        codes.immunizations
    ]
};

If you need a code for a section that hasn't been defined at the start of this same file yet, create them by appending lines like this one for each code you want to add:

codes.newCodeName="code number goes here";

Want to give it a try?
http://52.20.128.239:3000/