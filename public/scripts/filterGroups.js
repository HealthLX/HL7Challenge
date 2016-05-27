const test="abc";
let filters={};
let codes={};

codes.allergies="48765-2";
codes.medications="10160-0";
codes.immunizations="11369-6";
codes.planOfCare="18776-5";
codes.problemList="11450-4";
codes.vitalSigns="8716-3";

filters["Basics"]=
{
    sections: [
    	codes.allergies,
        codes.medications,
        codes.immunizations
    ]
};

filters["Doctor Type 1"]=
{
    sections: [
        codes.allergies,
        codes.medications,
        codes.immunizations,
        codes.planOfCare,
        codes.problemList,
        codes.vitalSigns
    ]
};
