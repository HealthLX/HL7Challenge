const test="abc";
let filters={};
let codes={};

codes.allergies="48765-2";
codes.medications="10160-0";
codes.immunizations="11369-6";
codes.planOfCare="18776-5";
codes.problemList="11450-4";
codes.vitalSigns="8716-3";
codes.encounters="46240-8";
codes.procedures="47519-4";
codes.results="30954-2";
codes.socialHistory="29762-2";
codes.healthConcerns="75310-3";
codes.goals="61146-7";
codes.interventions="62387-6";
codes.healthStatusEvaluationsOutcomes="11383-7";
codes.advanceDirectives="42348-3";
codes.familyHistory="10157-6";
codes.functionalStatus="47420-5";
codes.medicalEquipment="46264-8";
codes.insuranceProviders="48768-6";
codes.reasonForReferral="42349-1";
codes.reasonForVisit="29299-5";
codes.instructions="69730-0";

filters["Care Manager"]=
{
    sections: [
    	codes.allergies,
        codes.medications,
        codes.immunizations,
        codes.planOfCare,
        codes.problemList,
        codes.vitalSigns,
        codes.encounters,
        codes.procedures,
        codes.results,
        codes.healthConcerns,
        codes.goals,
        codes.interventions,
        codes.healthStatusEvaluationsOutcomes,
        codes.advanceDirectives,
        codes.familyHistory,
        codes.functionalStatus,
        codes.medicalEquipment,
        codes.insuranceProviders,
        codes.reasonForReferral,
        codes.reasonForVisit,
        codes.instructions
    ]
};

filters["Dentist"]=
{
    sections: [
        codes.allergies,
        codes.medications,
        codes.planOfCare
    ]
};

filters["Primary Doctor"]=
{
    sections: [
        codes.allergies,
        codes.medications,
        codes.immunizations,
        codes.planOfCare,
        codes.problemList,
        codes.vitalSigns,
        codes.encounters,
        codes.procedures,
        codes.results,
        codes.socialHistory,
        codes.healthConcerns,
        codes.goals,
        codes.interventions,
        codes.healthStatusEvaluationsOutcomes,
        codes.advanceDirectives,
        codes.familyHistory,
        codes.functionalStatus,
        codes.medicalEquipment,
        codes.insuranceProviders,
        codes.reasonForReferral,
        codes.reasonForVisit,
        codes.instructions
    ]
};
filters["Family Member"]=
{
    sections: [
        codes.allergies,
        codes.medications,
        codes.immunizations,
        codes.planOfCare,
        codes.problemList,
        codes.vitalSigns,
        codes.procedures,
        codes.results,
        codes.socialHistory,
        codes.healthConcerns,
        codes.interventions,
        codes.familyHistory,
        codes.functionalStatus,
        codes.medicalEquipment,
        codes.reasonForVisit
    ]
};

