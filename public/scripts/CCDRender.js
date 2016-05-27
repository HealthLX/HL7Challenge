var globalVar={};
var languages639_1= [
{'code':'ab','value':'Abkhaz'}, {'code':'aa','value':'Afar'}, {'code':'af','value':'Afrikaans'}, {'code':'ak','value':'Akan'}, {'code':'sq','value':'Albanian'},
{'code':'am','value':'Amharic'}, {'code':'ar','value':'Arabic'}, {'code':'an','value':'Aragonese'}, {'code':'hy','value':'Armenian'}, {'code':'as','value':'Assamese'},
{'code':'av','value':'Avaric'}, {'code':'ae','value':'Avestan'}, {'code':'ay','value':'Aymara'}, {'code':'az','value':'Azerbaijani'}, {'code':'bm','value':'Bambara'},
{'code':'ba','value':'Bashkir'}, {'code':'eu','value':'Basque'}, {'code':'be','value':'Belarusian'}, {'code':'bn','value':'Bengali, Bangla'}, {'code':'bh','value':'Bihari'},
{'code':'bi','value':'Bislama'}, {'code':'bs','value':'Bosnian'}, {'code':'br','value':'Breton'}, {'code':'bg','value':'Bulgarian'}, {'code':'my','value':'Burmese'},
{'code':'ca','value':'Catalan'}, {'code':'ch','value':'Chamorro'}, {'code':'ce','value':'Chechen'}, {'code':'ny','value':'Chichewa, Chewa, Nyanja'}, {'code':'zh','value':'Chinese'},
{'code':'cv','value':'Chuvash'}, {'code':'kw','value':'Cornish'}, {'code':'co','value':'Corsican'}, {'code':'cr','value':'Cree'}, {'code':'hr','value':'Croatian'},
{'code':'cs','value':'Czech'}, {'code':'da','value':'Danish'}, {'code':'dv','value':'Divehi, Dhivehi, Maldivian'}, {'code':'nl','value':'Dutch'}, {'code':'dz','value':'Dzongkha'},
{'code':'en','value':'English'}, {'code':'eo','value':'Esperanto'}, {'code':'et','value':'Estonian'}, {'code':'ee','value':'Ewe'}, {'code':'fo','value':'Faroese'},
{'code':'fj','value':'Fijian'}, {'code':'fi','value':'Finnish'}, {'code':'fr','value':'French'}, {'code':'ff','value':'Fula, Fulah, Pulaar, Pular'}, {'code':'gl','value':'Galician'},
{'code':'ka','value':'Georgian'}, {'code':'de','value':'German'}, {'code':'el','value':'Greek (modern)'}, {'code':'gn','value':'Guaraní'}, {'code':'gu','value':'Gujarati'},
{'code':'ht','value':'Haitian, Haitian Creole'}, {'code':'ha','value':'Hausa'}, {'code':'he','value':'Hebrew (modern)'}, {'code':'hz','value':'Herero'}, {'code':'hi','value':'Hindi'},
{'code':'ho','value':'Hiri Motu'}, {'code':'hu','value':'Hungarian'}, {'code':'ia','value':'Interlingua'}, {'code':'id','value':'Indonesian'}, {'code':'ie','value':'Interlingue'},
{'code':'ga','value':'Irish'}, {'code':'ig','value':'Igbo'}, {'code':'ik','value':'Inupiaq'}, {'code':'io','value':'Ido'}, {'code':'is','value':'Icelandic'},
{'code':'it','value':'Italian'}, {'code':'iu','value':'Inuktitut'}, {'code':'ja','value':'Japanese'}, {'code':'jv','value':'Javanese'}, {'code':'kl','value':'Kalaallisut, Greenlandic'},
{'code':'kn','value':'Kannada'}, {'code':'kr','value':'Kanuri'}, {'code':'ks','value':'Kashmiri'}, {'code':'kk','value':'Kazakh'}, {'code':'km','value':'Khmer'},
{'code':'ki','value':'Kikuyu, Gikuyu'}, {'code':'rw','value':'Kinyarwanda'}, {'code':'ky','value':'Kyrgyz'}, {'code':'kv','value':'Komi'}, {'code':'kg','value':'Kongo'},
{'code':'ko','value':'Korean'}, {'code':'ku','value':'Kurdish'}, {'code':'kj','value':'Kwanyama, Kuanyama'}, {'code':'la','value':'Latin'}, {'code':'lb','value':'Luxembourgish, Letzeburgesch'},
{'code':'lg','value':'Ganda'}, {'code':'li','value':'Limburgish, Limburgan, Limburger'}, {'code':'ln','value':'Lingala'}, {'code':'lo','value':'Lao'}, {'code':'lt','value':'Lithuanian'},
{'code':'lu','value':'Luba-Katanga'}, {'code':'lv','value':'Latvian'}, {'code':'gv','value':'Manx'}, {'code':'mk','value':'Macedonian'}, {'code':'mg','value':'Malagasy'},
{'code':'ms','value':'Malay'}, {'code':'ml','value':'Malayalam'}, {'code':'mt','value':'Maltese'}, {'code':'mi','value':'Māori'}, {'code':'mr','value':'Marathi (Marāṭhī)'},
{'code':'mh','value':'Marshallese'}, {'code':'mn','value':'Mongolian'}, {'code':'na','value':'Nauruan'}, {'code':'nv','value':'Navajo, Navaho'}, {'code':'nd','value':'Northern Ndebele'},
{'code':'ne','value':'Nepali'}, {'code':'ng','value':'Ndonga'}, {'code':'nb','value':'Norwegian Bokmål'}, {'code':'nn','value':'Norwegian Nynorsk'}, {'code':'no','value':'Norwegian'},
{'code':'ii','value':'Nuosu'}, {'code':'nr','value':'Southern Ndebele'}, {'code':'oc','value':'Occitan'}, {'code':'oj','value':'Ojibwe, Ojibwa'}, {'code':'cu','value':'Old Church Slavonic, Church Slavonic, Old Bulgarian'},
{'code':'om','value':'Oromo'}, {'code':'or','value':'Oriya'}, {'code':'os','value':'Ossetian, Ossetic'}, {'code':'pa','value':'Panjabi, Punjabi'}, {'code':'pi','value':'Pāli'},
{'code':'fa','value':'Persian (Farsi)'}, {'code':'pl','value':'Polish'}, {'code':'ps','value':'Pashto, Pushto'}, {'code':'pt','value':'Portuguese'}, {'code':'qu','value':'Quechua'},
{'code':'rm','value':'Romansh'}, {'code':'rn','value':'Kirundi'}, {'code':'rc','value':'Reunionese, Reunion Creole'}, {'code':'ro','value':'Romanian'}, {'code':'ru','value':'Russian'},
{'code':'sa','value':'Sanskrit (Saṁskṛta)'}, {'code':'sc','value':'Sardinian'}, {'code':'sd','value':'Sindhi'}, {'code':'se','value':'Northern Sami'}, {'code':'sm','value':'Samoan'},
{'code':'sg','value':'Sango'}, {'code':'sr','value':'Serbian'}, {'code':'gd','value':'Scottish Gaelic, Gaelic'}, {'code':'sn','value':'Shona'}, {'code':'si','value':'Sinhalese, Sinhala'},
{'code':'sk','value':'Slovak'}, {'code':'sl','value':'Slovene'}, {'code':'so','value':'Somali'}, {'code':'st','value':'Southern Sotho'}, {'code':'es','value':'Spanish'},
{'code':'su','value':'Sundanese'}, {'code':'sw','value':'Swahili'}, {'code':'ss','value':'Swati'}, {'code':'sv','value':'Swedish'}, {'code':'ta','value':'Tamil'},
{'code':'te','value':'Telugu'}, {'code':'tg','value':'Tajik'}, {'code':'th','value':'Thai'}, {'code':'ti','value':'Tigrinya'}, {'code':'bo','value':'Tibetan Standard, Tibetan, Central'},
{'code':'tk','value':'Turkmen'}, {'code':'tl','value':'Tagalog'}, {'code':'tn','value':'Tswana'}, {'code':'to','value':'Tonga (Tonga Islands)'}, {'code':'tr','value':'Turkish'},
{'code':'ts','value':'Tsonga'}, {'code':'tt','value':'Tatar'}, {'code':'tw','value':'Twi'}, {'code':'ty','value':'Tahitian'}, {'code':'ug','value':'Uyghur'},
{'code':'uk','value':'Ukrainian'}, {'code':'ur','value':'Urdu'}, {'code':'uz','value':'Uzbek'}, {'code':'ve','value':'Venda'}, {'code':'vi','value':'Vietnamese'},
{'code':'vo','value':'Volapük'}, {'code':'wa','value':'Walloon'}, {'code':'cy','value':'Welsh'}, {'code':'wo','value':'Wolof'}, {'code':'fy','value':'Western Frisian'},
{'code':'xh','value':'Xhosa'}, {'code':'yi','value':'Yiddish'}, {'code':'yo','value':'Yoruba'}, {'code':'za','value':'Zhuang, Chuang'}, {'code':'zu','value':'Zulu'}];
var languages639_2 = [
{'code':'abk','value':'Abkhaz'}, {'code':'aar','value':'Afar'}, {'code':'afr','value':'Afrikaans'}, {'code':'aka','value':'Akan'}, {'code':'sqi','value':'Albanian'},
{'code':'amh','value':'Amharic'}, {'code':'ara','value':'Arabic'}, {'code':'arg','value':'Aragonese'}, {'code':'hye','value':'Armenian'}, {'code':'asm','value':'Assamese'},
{'code':'ava','value':'Avaric'}, {'code':'ave','value':'Avestan'}, {'code':'aym','value':'Aymara'}, {'code':'aze','value':'Azerbaijani'}, {'code':'bam','value':'Bambara'},
{'code':'bak','value':'Bashkir'}, {'code':'eus','value':'Basque'}, {'code':'bel','value':'Belarusian'}, {'code':'ben','value':'Bengali, Bangla'}, {'code':'bih','value':'Bihari'},
{'code':'bis','value':'Bislama'}, {'code':'bos','value':'Bosnian'}, {'code':'bre','value':'Breton'}, {'code':'bul','value':'Bulgarian'}, {'code':'mya','value':'Burmese'},
{'code':'cat','value':'Catalan'}, {'code':'cha','value':'Chamorro'}, {'code':'che','value':'Chechen'}, {'code':'nya','value':'Chichewa, Chewa, Nyanja'}, {'code':'zho','value':'Chinese'},
{'code':'chv','value':'Chuvash'}, {'code':'cor','value':'Cornish'}, {'code':'cos','value':'Corsican'}, {'code':'cre','value':'Cree'}, {'code':'hrv','value':'Croatian'},
{'code':'ces','value':'Czech'}, {'code':'dan','value':'Danish'}, {'code':'div','value':'Divehi, Dhivehi, Maldivian'}, {'code':'nld','value':'Dutch'}, {'code':'dzo','value':'Dzongkha'},
{'code':'eng','value':'English'}, {'code':'epo','value':'Esperanto'}, {'code':'est','value':'Estonian'}, {'code':'ewe','value':'Ewe'}, {'code':'fao','value':'Faroese'},
{'code':'fij','value':'Fijian'}, {'code':'fin','value':'Finnish'}, {'code':'fra','value':'French'}, {'code':'ful','value':'Fula, Fulah, Pulaar, Pular'}, {'code':'glg','value':'Galician'},
{'code':'kat','value':'Georgian'}, {'code':'deu','value':'German'}, {'code':'ell','value':'Greek (modern)'}, {'code':'grn','value':'Guaraní'}, {'code':'guj','value':'Gujarati'},
{'code':'hat','value':'Haitian, Haitian Creole'}, {'code':'hau','value':'Hausa'}, {'code':'heb','value':'Hebrew (modern)'}, {'code':'her','value':'Herero'}, {'code':'hin','value':'Hindi'},
{'code':'hmo','value':'Hiri Motu'}, {'code':'hun','value':'Hungarian'}, {'code':'ina','value':'Interlingua'}, {'code':'ind','value':'Indonesian'}, {'code':'ile','value':'Interlingue'},
{'code':'gle','value':'Irish'}, {'code':'ibo','value':'Igbo'}, {'code':'ipk','value':'Inupiaq'}, {'code':'ido','value':'Ido'}, {'code':'isl','value':'Icelandic'},
{'code':'ita','value':'Italian'}, {'code':'iku','value':'Inuktitut'}, {'code':'jpn','value':'Japanese'}, {'code':'jav','value':'Javanese'}, {'code':'kal','value':'Kalaallisut, Greenlandic'},
{'code':'kan','value':'Kannada'}, {'code':'kau','value':'Kanuri'}, {'code':'kas','value':'Kashmiri'}, {'code':'kaz','value':'Kazakh'}, {'code':'khm','value':'Khmer'},
{'code':'kik','value':'Kikuyu, Gikuyu'}, {'code':'kin','value':'Kinyarwanda'}, {'code':'kir','value':'Kyrgyz'}, {'code':'kom','value':'Komi'}, {'code':'kon','value':'Kongo'},
{'code':'kor','value':'Korean'}, {'code':'kur','value':'Kurdish'}, {'code':'kua','value':'Kwanyama, Kuanyama'}, {'code':'lat','value':'Latin'}, {'code':'ltz','value':'Luxembourgish, Letzeburgesch'},
{'code':'lug','value':'Ganda'}, {'code':'lim','value':'Limburgish, Limburgan, Limburger'}, {'code':'lin','value':'Lingala'}, {'code':'lao','value':'Lao'}, {'code':'lit','value':'Lithuanian'},
{'code':'lub','value':'Luba-Katanga'}, {'code':'lav','value':'Latvian'}, {'code':'glv','value':'Manx'}, {'code':'mkd','value':'Macedonian'}, {'code':'mlg','value':'Malagasy'},
{'code':'msa','value':'Malay'}, {'code':'mal','value':'Malayalam'}, {'code':'mlt','value':'Maltese'}, {'code':'mri','value':'Māori'}, {'code':'mar','value':'Marathi (Marāṭhī)'},
{'code':'mah','value':'Marshallese'}, {'code':'mon','value':'Mongolian'}, {'code':'nau','value':'Nauruan'}, {'code':'nav','value':'Navajo, Navaho'}, {'code':'nde','value':'Northern Ndebele'},
{'code':'nep','value':'Nepali'}, {'code':'ndo','value':'Ndonga'}, {'code':'nob','value':'Norwegian Bokmål'}, {'code':'nno','value':'Norwegian Nynorsk'}, {'code':'nor','value':'Norwegian'},
{'code':'iii','value':'Nuosu'}, {'code':'nbl','value':'Southern Ndebele'}, {'code':'oci','value':'Occitan'}, {'code':'oji','value':'Ojibwe, Ojibwa'}, {'code':'chu','value':'Old Church Slavonic, Church Slavonic, Old Bulgarian'},
{'code':'orm','value':'Oromo'}, {'code':'ori','value':'Oriya'}, {'code':'oss','value':'Ossetian, Ossetic'}, {'code':'pan','value':'Panjabi, Punjabi'}, {'code':'pli','value':'Pāli'},
{'code':'fas','value':'Persian (Farsi)'}, {'code':'pol','value':'Polish'}, {'code':'pus','value':'Pashto, Pushto'}, {'code':'por','value':'Portuguese'}, {'code':'que','value':'Quechua'},
{'code':'roh','value':'Romansh'}, {'code':'run','value':'Kirundi'}, {'code':'rcf','value':'Reunionese, Reunion Creole'}, {'code':'ron','value':'Romanian'}, {'code':'rus','value':'Russian'},
{'code':'san','value':'Sanskrit (Saṁskṛta)'}, {'code':'srd','value':'Sardinian'}, {'code':'snd','value':'Sindhi'}, {'code':'sme','value':'Northern Sami'}, {'code':'smo','value':'Samoan'},
{'code':'sag','value':'Sango'}, {'code':'srp','value':'Serbian'}, {'code':'gla','value':'Scottish Gaelic, Gaelic'}, {'code':'sna','value':'Shona'}, {'code':'sin','value':'Sinhalese, Sinhala'},
{'code':'slk','value':'Slovak'}, {'code':'slv','value':'Slovene'}, {'code':'som','value':'Somali'}, {'code':'sot','value':'Southern Sotho'}, {'code':'spa','value':'Spanish'},
{'code':'sun','value':'Sundanese'}, {'code':'swa','value':'Swahili'}, {'code':'ssw','value':'Swati'}, {'code':'swe','value':'Swedish'}, {'code':'tam','value':'Tamil'},
{'code':'tel','value':'Telugu'}, {'code':'tgk','value':'Tajik'}, {'code':'tha','value':'Thai'}, {'code':'tir','value':'Tigrinya'}, {'code':'bod','value':'Tibetan Standard, Tibetan, Central'},
{'code':'tuk','value':'Turkmen'}, {'code':'tgl','value':'Tagalog'}, {'code':'tsn','value':'Tswana'}, {'code':'ton','value':'Tonga (Tonga Islands)'}, {'code':'tur','value':'Turkish'},
{'code':'tso','value':'Tsonga'}, {'code':'tat','value':'Tatar'}, {'code':'twi','value':'Twi'}, {'code':'tah','value':'Tahitian'}, {'code':'uig','value':'Uyghur'},
{'code':'ukr','value':'Ukrainian'}, {'code':'urd','value':'Urdu'}, {'code':'uzb','value':'Uzbek'}, {'code':'ven','value':'Venda'}, {'code':'vie','value':'Vietnamese'},
{'code':'vol','value':'Volapük'}, {'code':'wln','value':'Walloon'}, {'code':'cym','value':'Welsh'}, {'code':'wol','value':'Wolof'}, {'code':'fry','value':'Western Frisian'},
{'code':'xho','value':'Xhosa'}, {'code':'yid','value':'Yiddish'}, {'code':'yor','value':'Yoruba'}, {'code':'zha','value':'Zhuang, Chuang'}, {'code':'zul','value':'Zulu'}];
var menuData =  [

];

/* Container of panels */
var PanelBox=React.createClass(
{
    getInitialState: function()
    {
        return {
            filter: null
        };
    },

    componentWillMount: function()
    {
        var component=this;
        globalVar.callback=function(filterName)
        {
            console.log("name received "+filterName);
            component.setState({filter: filters[filterName]});
            debugvar=component;
        };
    },

    // first time load finished
    componentDidMount: function()
    {
        // Use masonry for the layout of the panels
        $("#panels").masonry({itemSelector: ".grid-item"});
    },

    // update finished
    componentDidUpdate: function(prevProps, prevState)
    {
        // Mark all panels as visible in case some were hidden previously
        $(".section-panel").addClass("grid-item").show(0);
        $("#panels").masonry("reloadItems").masonry();
    },

    render: function()
    {
        var filter=this.state.filter;

        var nodes = this.props.data.map(function(component, index)
        {
          // if there's a filter set, check ignore the sections that aren't part of it
          if(filter && $.inArray(component.type, filter.sections)==-1)
            return null;

          var panel;
          // font awesome default icon class for panel
          var iconClass="fa-heart-o";

          // Create panels according to their LOINC code
          switch(component.type)
          {
            //Allergies
            case "48765-2":
                iconClass="fa-info-circle";
                break;
            //Medications
            case "10160-0":
                iconClass="fa-asterisk";
                break;
            //Immunizations
            case "11369-6":
                iconClass="fa-medkit";
                break;
            //Plan of care
            case "18776-5":
                iconClass="fa-plus-square";
                break;
            //Encounters
            case "46240-8":
                iconClass="fa-hospital-o";
                break;
            //Problem list
            case "11450-4":
                iconClass="fa-exclamation-triangle";
                break;
            //Procedures
            case "47519-4":
                iconClass="fa-bed";
                break;
            //Results
            case "30954-2":
                iconClass="fa-file-text-o";
                break;
            //Social History
            case "29762-2":
                iconClass="fa-user-plus";
                break;
            //Vital Signs
            case "8716-3":
                iconClass="fa-heartbeat";
                break;
            //Health Concerns Section
            case "75310-3":
                iconClass="fa-ambulance";
                break;
            //Goals Section
            case "61146-7":
                iconClass="fa-list-ul";
                break;
            //Interventions Section
            case "62387-6":
                iconClass="fa-user-md";
                break;
            //Health Status Evaluations/Outcomes Section
            case "11383-7":
                iconClass="fa-heart";
                break;
            //Advance Directives
            case "42348-3":
                iconClass="fa-bolt";
                break;
            //Family History
            case "10157-6":
                iconClass="fa-users";
                break;
            //Functional Status
            case "47420-5":
                iconClass="fa-check-square-o";
                break;
            //Medical Equipment
            case "46264-8":
                iconClass="fa-stethoscope";
                break;
            //Insurance Providers
            case "48768-6":
                iconClass="fa-shield";
                break;
            //Reason For Referral
            case "42349-1":
                iconClass="fa-question-circle-o";
                break;
            //Reason For Visit
            case "29299-5":
                iconClass="fa-question-circle-o";
                break;
            //Instructions
            case "69730-0":
                iconClass="fa-list-alt";
                break;
            }

            var hasSpans = false;

            if(component.otherText.length == 0 && component.data.length > 0)
            {
                for(var i=0; i < component.data.length; i++)
                    if(component.data[i].hasSpans)
                        hasSpans = true;

                if(component.data.length == 1 && component.data[0].rows[0].length >= 5 && !hasSpans)
                    panel = (<CollapsiblePanel key={index} id={component.id} title={component.title} data={component.data} iconClass={iconClass}/>);
                else
                    panel = (<GenericPanel key={index} id={component.id} title={component.title} data={component.data} otherText={component.otherText} iconClass={iconClass}/>);
            }
            else
                panel = (<GenericPanel key={index} id={component.id} title={component.title} data={component.data} otherText={component.otherText} iconClass={iconClass}/>);

            return(panel);
        });

        return(
            <div>
                {nodes}
            </div>
        );
    }
});

/* Panel containing the main information of the patient */
class PatientDetails extends React.Component
{
    render()
    {
        var patientRole=this.props.patientRole;
        var patientMap = getPatientDetails(patientRole);
        var marital = "", religion = "";
        // var iconGender = (patientMap.gender==="Female" || patientMap.gender==="F")?"assets/img/woman.png":"assets/img/man.jpg";
        console.log("MaritalStatus: " + patientMap.maritalStatus);
        // /
        if (patientMap.religion==undefined || patientMap.religion==="")
            patientMap.religion="[no religion defined]";
        if (patientMap.language==undefined || patientMap.language==="" || patientMap.language==="?")
            patientMap.language="[no language defined]";
        return(
            <div>
              <div className="col-lg-12 col-md-12 col-sm-12 mb">
                  <div className="patientDetails panel pn">
                      <div className="data">
                            <span className="fa-stack fa-5x icon-person">
                              <i className="fa fa-circle fa-stack-2x mint-color"></i>
                              <i className="fa fa-user fa-stack-1x fa-inverse"></i>
                            </span>
                            <h1 className="go-left">{patientMap.name} (<span className="mint-color">{patientMap.age}</span>)</h1>
                            <p className="patientData">
                                <b className="mint-color">{patientMap.firstName}</b> is a
                                <span className='mint-color'> {patientMap.maritalStatus}</span>&nbsp;
                                <span className="mint-color">{patientMap.race}</span>&nbsp;
                                <span className="mint-color">{patientMap.gender}</span>&nbsp;
                                who is <span className="mint-color">{patientMap.religion}</span>&nbsp;
                                and speaks <span className="mint-color">{patientMap.language}</span>.
                            </p>
                        <dl>
                            <li><dt><span className="fa fa-birthday-cake"></span> DOB: </dt><dd>{patientMap.dob}</dd></li>
                            <li><dt><span className="fa fa-map-marker"></span> Address: </dt><dd>{patientMap.address}</dd></li>
                            <li><dt><span className="fa fa-phone"></span> Telephone: </dt><dd>{patientMap.contact}</dd></li>
                            <li><dt><span className="fa fa-user"></span> Guardian: </dt><dd>{patientMap.guardianName}</dd></li>
                        </dl>
                      </div>
                  </div>
              </div>
            </div>
        );
    }
}

/* Panel containing the Health Status of the patient */
class HealthStatusPanel extends React.Component
{

    render()
    {

        return(
            <div className="col-lg-12 col-md-12 col-sm-12 mb" style={{display: 'none'}}>
                <div className="mint-panel pn">
                    <div className="mint-header">
                        <h3 className="panel-title">Health Status</h3>
                        <canvas id="myCanvas" width="400" height="400">

                        </canvas>
                    </div>
                    <div class="panel-body">
                        Panel content
                    </div>
                </div>
            </div>
        );
    }
}

/* Generic Panel to display information of a specific CCD section */
var GenericPanel=React.createClass(
{
    getInitialState() {
        return {data: [], display: 'block', otherData: [], title: ''};
    },

    onClick(e)
    {
        var titleRef=this.props.id;
        $("#"+titleRef).hide("fast", function()
        {
            // animation completed. update the layout of the panels
            $("#"+titleRef).removeClass("grid-item");
            $("#panels").masonry("reloadItems").masonry();
        });
        e.preventDefault();
    },

    render()
    {
        // If no data (tables) nor otherText(non-tables), there's nothing to show for this table
        if(!this.props.data && !this.props.otherText)
            return;

        // Sections might contain more than one table
        var tables=[];
        var panelSizeClasses="col-lg-3 col-md-4 col-sm-12";

        // Process for tables information
        for(var tableNum=0; tableNum<this.props.data.length; tableNum++)
        {
            // variable to contain the html rows of data to render
            var elements=[];
            var table=this.props.data[tableNum];
            var rows=table.rows;
            var headers=table.headers;

            //handle tables with spans differently
            if(table.hasSpans || table.caption != null)
            {
                var tblCaption;
                var tblHeader = [];
                var tblBody=[];
                var tblBodyTr=[];

                panelSizeClasses="col-lg-6 col-md-8 col-sm-12";

                if(table.caption != null)
                    tblCaption = (<caption className="text-center">{table.caption}</caption>);

                for(var r=0; r<headers.length; r++)
                {
                    elements = [];

                    for(var i=0; i<headers[r].length; i++)
                    {

                        if(!elements[i])
                            elements[i]=[];

                        if(headers[r][i].isTh)
                            elements[i].push(
                                    <th key={i} colSpan={headers[r][i].colspan} rowSpan={headers[r][i].rowspan}>
                                        {headers[r][i].text}
                                    </th>
                                );
                        else
                            elements[i].push(
                                    <td key={i} colSpan={headers[r][i].colspan} rowSpan={headers[r][i].rowspan}>
                                        {headers[r][i].text}
                                    </td>
                                );

                    }

                    tblHeader.push(
                        <tr key={r}>
                            {elements}
                        </tr>
                    );
                }

                elements = [];

                for(var b=0; b<rows.length; b++)
                {
                    tblBodyTr = [];

                    for(var r=0; r<rows[b].length; r++)
                    {
                        elements = [];

                        for(var i=0; i<rows[b][r].length; i++)
                        {
                            if(!elements[i])
                                elements[i]=[];

                            let text = rows[b][r][i][0];
                            var listText = [];

                            if(!Array.isArray(text.text))
                                    text.text = [text.text];

                            for(var t=0; t<text.text.length; t++)
                                if(text.text[t].text != "")
                                    listText.push(<p key={b+""+r+""+i+""+t}>{text.text[t].text}</p>);


                            if(text.isTh)
                                elements[i].push(
                                    <th  key={b+""+r+""+i} colSpan={text.colspan} rowSpan={text.rowspan}>
                                        {listText}
                                    </th>
                                );
                            else
                                elements[i].push(
                                    <td  key={b+""+r+""+i} colSpan={text.colspan} rowSpan={text.rowspan}>
                                        {listText}
                                    </td>
                                );
                        }

                        tblBodyTr.push(
                            <tr key={b+""+r}>
                                {elements}
                            </tr>
                        );
                    }

                    tblBody.push(
                        <tbody key={b}>
                            {tblBodyTr}
                        </tbody>
                    );
                }

                // html wrapper for the table data
                tables.push(
                    <div className="row" key={tableNum}>
                        <div className="col-sm-12">
                            <div className="table-responsive">
                                <table className="table table-wrap table-bordered table-striped table-hover table-condensed">
                                    {tblCaption}
                                    <thead>
                                        {tblHeader}
                                    </thead>
                                    {tblBody}
                                </table>
                            </div>
                        </div>
                    </div>
                );
            }
            else
            {
                for(var r=0; r<rows[0].length; r++)
                {
                    if(!elements[r])
                        elements[r]=[];

                    for(var i=0; i<headers[0].length; i++)
                    {
                        let text = rows[0][r][i][0];
                        var listText = [];

                        //Less rows than headers *CHECK*
                        if(text)
                        {
                            if(!Array.isArray(text.text))
                                text.text = [text.text];

                            for(var t=0; t<text.text.length; t++)
                            {
                                if(text.text[t].text != "")
                                   listText.push(<p key={r+""+i+""+t}>{text.text[t].text}</p>);
                            }
                        }
                        else
                            break;

                        if(rows[0][r].length > 1)
                            elements[r].push(
                                <dl key={r+""+i} className="dl-horizontal">
                                    <dt><span className="label label-default">{headers[0][i].text}</span></dt>
                                    <dd className="text-left">{listText}</dd>
                                </dl>
                            );
                        else
                            elements[r].push(
                                <dl key={r+""+i} className="dl-horizontal">
                                    {listText}
                                </dl>
                            );
                    }
                }

                // html structure for each row of data
                var listItems=(elements.map(function(element, index)
                {
                    return(
                        <div key={index}>
                            {element}
                            <hr/>
                        </div>
                    );
                }));

                // html wrapper for the table data
                tables.push(
                    <div key={tableNum}>
                        {listItems}
                    </div>
                );
            }
        }

        // Process for non tables information
        if(this.props.otherText)
        {
            // array of items to be rendered
            var elements=new Array();

            for(var j=0; j<this.props.otherText.length; j++)
            {
                if(!elements[j])
                    elements[j]=[];

                elements[j].push(
                        <dl key={j} className="dl-horizontal">
                            {this.props.otherText[j].text}
                        </dl>
                    );
            }

            // html structure for each row of data
            var listItems=(elements.map(function(element, index)
            {
                return(
                    <div key={index}>
                        {element}
                        <hr/>
                    </div>
                );
            }));

            // html wrapper for the list of data
            tables.push(
                <div key={tableNum+1}>
                    {listItems}
                </div>
            );
        }
        // Panel html structure
        var titleRef=this.props.id;
        return(
            <div id={titleRef} className={"grid-item section-panel mb "+panelSizeClasses} style={{display: this.state.display}}>
                <div className="mint-panel pn">
                    <div className="mint-header">
                        <h4>
                            <button className="close" onClick={this.onClick}>
                                <i className="fa fa-trash-o fa-lg"></i>
                            </button>
                            {this.props.title}
                        </h4>
                    </div>
                    <span className={"pn-bg fa "+this.props.iconClass+" fa-5x"}></span>
                    {tables}
                </div>
            </div>
        );
    }
});

var CollapsiblePanel=React.createClass(
{
    getInitialState() {
        return {data: [], display: 'block', title: ''};
    },

    onClick(e)
    {
        var titleRef=this.props.id;
        $("#"+titleRef).hide("fast", function()
        {
            // animation completed. update the layout of the panels
            $("#"+titleRef).removeClass("grid-item");
            $("#panels").masonry("reloadItems").masonry();
        });
        e.preventDefault();
    },

    // update finished
    componentDidMount(prevProps, prevState)
    {
        var titleRef=this.props.id;
        $("#accordion"+titleRef).on('shown.bs.collapse', function () {
            $("#panels").masonry("reloadItems").masonry();
        })

        $("#accordion"+titleRef).on('hidden.bs.collapse', function () {
            $("#panels").masonry("reloadItems").masonry();
        })
    },

    render()
    {
        if(!this.props.data)
            return;

        var tables=[];
        var collapsePanelHeading = [];
        var titlePanel = this.props.title;
        var accordion = "accordion"+this.props.id;

        for(var tableNum=0; tableNum<this.props.data.length; tableNum++)
        {
            var table=this.props.data[tableNum];
            var elements=[];
            var rows=table.rows;
            var headers=table.headers;

            for(var r=0; r<rows[0].length; r++)
            {
                if(!elements[r])
                    elements[r]=[];

                for(var i=0; i<headers[0].length; i++) {
                    let text = rows[0][r][i][0];
                    var listText = [];

                    if(text)
                    {
                        if(!Array.isArray(text.text))
                            text.text = [text.text];

                        for(var t=0; t<text.text.length; t++)
                        {
                            if(text.text[t].text != "")
                                listText.push(<p key={r+""+i+""+t}>{text.text[t].text}</p>);
                        }
                    }

                    if (i===0 && text) {
                        collapsePanelHeading.push(text.text[0].text.toUpperCase());
                    }
                    elements[r].push(
                        <dl key={r+""+i} className="dl-horizontal">
                            <dt><span className="label label-default">{headers[0][i].text}</span></dt>
                            <dd className="text-left">{listText}</dd>
                        </dl>
                    );
                }
            }

            var listItems=(elements.map(function(element, index)
            {
                var finalStr = collapsePanelHeading[index].replace(/,|:| |\u0028|\u0029|\u002E/g,"_");
                var where = finalStr.indexOf("/");
                if (where > 0)
                  finalStr = finalStr.substring(0,where);
                var indexRef = "#"+finalStr+index;
                var indexRefNo = finalStr+index;


                return(
                      <span key={index}>
                      <div className="panel-heading mint-header-no-margin">
                        <h4 className="panel-title">
                          <a href={indexRef} data-parent={accordion} data-toggle="collapse" >{collapsePanelHeading[index]}
                          </a>
                        </h4>
                      </div>
                      <div id={indexRefNo} className="panel-collapse collapse white-back">
                          {element}
                          <hr/>
                      </div>
                      </span>
                );
            }, this));

            tables.push(
                <div key={tableNum} className="panel-default">
                    {listItems}
                </div>
            );
        }

        var titleRef = this.props.id;
        return(
            <div id={titleRef} className="grid-item section-panel col-lg-3 col-md-4 col-sm-12 mb" style={{display: this.state.display}}>
                <div className="mint-panel pn">
                    <div className="mint-header">
                        <h4>
                            <button className="close" onClick={this.onClick}>
                                <i className="fa fa-trash-o fa-lg"></i>
                            </button>
                            {this.props.title}
                        </h4>
                    </div>
                  <span className={"pn-bg fa "+this.props.iconClass+" fa-5x"}></span>
                  <div className="panel-body">
                    <div id={accordion} className="panel-group" onExited={this.handleClick}>
                      {tables}
                    </div>
                  </div>
                </div>
            </div>
        );
    }
});

/* CCDA XML File Upload form. Main step */
class XMLForm extends React.Component
{
    render()
    {
        return(
            <div className="modal-content" >
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 className="modal-title" id="myModalLabel">Load new patient data</h4>
                </div>
                <div className="modal-body">
                    <form id="upload-form" action="http://localhost:8088/cda" method="post" enctype="multipart/form-data" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Choose file</label>
                            <input type="file" name="file"/>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                    <input type="submit" form="upload-form" className="btn btn-info" value="Upload"/>
                </div>
            </div>
        );
    }

    handleSubmit(event)
    {
        event.preventDefault();
        // this.setState({ type: 'info', message: 'Sending...' }, this.sendFormData);
        // Calls web service that receives the XML file and returns it converted to JSON
        $.ajax(
        {
            url: $(event.target).prop("action"),
            type: "POST",
            data: new FormData(event.target),
            // JSON data received from the service
            success: function(data)
            {
                // Extract needed parts of the document to process them
                var components = data.ClinicalDocument.component.structuredBody.component;
                var title = data.ClinicalDocument.title;
                var patientRole=data.ClinicalDocument.recordTarget.patientRole;
                var allComponents=new Array();
                var titles=[];

                // components contains the sections to display as panels
                for(let i=0; i<components.length; i++)
                {
                    let section=components[i].section;
                    let sectionCode=section.code["@code"];
                    let sectionTitle=section.title;
                    let sectionText=section.text;
                    let panelId="panel-"+sectionCode+"-"+i;
                    // tables found inside a section
                    let tableData=[];
                    // other strings found inside a section
                    let otherText=[];

                    // if(section.code["@code"] == "47420-5")
                    // {
                        // if the section only contains a string
                        if(typeof sectionText == "string")
                            otherText.push({"key": "string", "text": sectionText});
                        else
                            for(var item in sectionText)
                            {
                                // extract tables information
                                if(item=="table")
                                {
                                    var tables=sectionText[item];
                                    // if only one table is found make it an array to be able to use the loop in the next step
                                    if(!Array.isArray(tables))
                                        tables=[tables];
                                    for(var numTable=0; numTable<tables.length; numTable++)
                                        tableData.push(getNodeTableData(tables[numTable]));
                                }
                                else if(item=="list" && searchString("table", sectionText[item]))
                                {
                                    var tables=sectionText[item];
                                    // if only one table is found make it an array to be able to use the loop in the next step
                                    if(!Array.isArray(tables))
                                        tables=[tables];

                                    for(var numTable=0; numTable<tables.length; numTable++)
                                    {
                                        var items=tables[numTable].item;

                                        if(!Array.isArray(items))
                                            items=[items];

                                        for(var numItem=0; numItem<items.length; numItem++)
                                        {
                                            tableData.push(getNodeTableData(items[numItem].table));
                                            tableData.caption = items[numItem].caption;
                                        }
                                    }
                                }
                                else // print/save texts recursively
                                {
                                    if(typeof sectionText[item] == "string")
                                        otherText.push({"key": "string", "text": getNodeText(sectionText[item])});
                                    else
                                        iterate(sectionText[item], otherText);
                                }
                            }
                    // }

                    /* Added by VV to get the sections, for build the menu. */
                    var titleRef="javascript:goToByScroll('#"+panelId+"');";
                    titles.push({"text": sectionTitle, href: titleRef, "code": sectionCode});
                    /* * */

                    allComponents.push({"type": sectionCode, id: panelId, "title": sectionTitle, "data": tableData, "otherText": otherText});
                }

                // Close modal window with the upload form when the service call has finished
                $("#myModal").modal("toggle");

                showOtherSection();

                var originalData = [];
                originalData.push({text: 'Main Information', href: "javascript:goToByScroll('#patientDetails');", icon: 'glyphicon glyphicon-signal'});
                //originalData.push({text: 'Health Status',href: "javascript:goToByScroll('#healthStatus');", icon: 'glyphicon glyphicon-scale'});
                originalData.push({text: 'CCDA Info',icon: 'glyphicon glyphicon-list-alt', nodes: titles});

                // Render components
                ReactDOM.render(<PanelBox data={allComponents}/>, document.getElementById("panels"));
                ReactDOM.render(<TreeView treeData={originalData} enableLinks={true}/>, document.getElementById("tree_menu"));
                ReactDOM.render(<PatientDetails patientRole={patientRole}/>, document.getElementById("patientDetails"));
                ReactDOM.render(<HealthStatusPanel id="idMain" />, document.getElementById("healthstatus"));
            },
            // Web service call error
            error: function(err)
            {
                var message = "";

                if(err.responseText != null)
                  message = $.parseJSON(err.responseText).errorMessage;
                else if(err.statusText != null)
                  message = err.statusText;

                // service is not active or unreachable
                if(err.status == 0)
                  message = "Service Unavailable";

                // show error message to the user
                showAlert("danger", "Error: "+message);
            },
            processData: false,
            contentType: false
        });
    }
}

/* Classes created by VV to create handle the menu. */
var TreeView = React.createClass(
{
  displayName: "TreeView",
  propTypes: {
    levels: React.PropTypes.number,
    treeData: React.PropTypes.array,
    expandIcon: React.PropTypes.string,
    collapseIcon: React.PropTypes.string,
    emptyIcon: React.PropTypes.string,
    nodeIcon: React.PropTypes.string,

    color: React.PropTypes.string,
    backColor: React.PropTypes.string,
    borderColor: React.PropTypes.string,
    onhoverColor: React.PropTypes.string,
    selectedColor: React.PropTypes.string,
    selectedBackColor: React.PropTypes.string,

    enableLinks: React.PropTypes.bool,
    highlightSelected: React.PropTypes.bool,
    showBorder: React.PropTypes.bool,
    showTags: React.PropTypes.bool,

    nodes: React.PropTypes.array
  },

  getDefaultProps: function () {
    return {
      levels: 2,
      treeData: undefined,
      expandIcon: 'glyphicon glyphicon-plus',
      collapseIcon: 'glyphicon glyphicon-minus',
      emptyIcon: 'glyphicon',
      nodeIcon: 'glyphicon glyphicon-asterisk',

      color: '#0A3F6C',
      backColor: undefined,
      borderColor: undefined,
      onhoverColor: '#F5F5F5', // TODO Not implemented yet, investigate radium.js 'A toolchain for React component styling'
      selectedColor: '#FFFFFF',
      selectedBackColor: '#428bca',

      enableLinks: false,
      highlightSelected: false,
      showBorder: true,
      showTags: false,

      nodes: []
    }
  },

  setNodeId: function(node) {

    if (!node.nodes) return;

    var _this = this;
    node.nodes.forEach(function checkStates(node) {
      node.nodeId = _this.props.nodes.length;
      _this.props.nodes.push(node);
      _this.setNodeId(node);
    });
  },

  render: function() {
    this.treeData = this.props.treeData;
    this.setNodeId({ nodes: this.treeData });

    var children = [];
    if (this.treeData) {
      var _this = this;
      var nodeIdKey = "IntTreeNode";
      this.treeData.forEach(function (node) {
        children.push(React.createElement(TreeNode, {node: node, key: nodeIdKey+""+node.nodeId,
                                level: 1,
                                visible: true,
                                options: _this.props}));
      });
    }
    return (
      <div id="treeviewList" className="treeview">
        <ul className="list-group" key="treeviewKey">
          { children }
        </ul>
      </div>
    )
  }
});

var TreeNode = React.createClass({
  displayName: "TreeNode",
  getInitialState: function() {
    var node = this.props.node;
    var key = this.props.keyId;
    return {
      expanded: (node.state && node.state.hasOwnProperty('expanded')) ?
                  node.state.expanded :
                    (this.props.level < this.props.options.levels) ?
                      true :
                      false,
      selected: (node.state && node.state.hasOwnProperty('selected')) ?
                  node.state.selected :
                  false
    }
  },

  toggleExpanded: function(id, event) {
    this.setState({ expanded: !this.state.expanded });
    event.stopPropagation();
  },

  toggleSelected: function(id, event) {
    this.setState({ selected: !this.state.selected });
    event.stopPropagation();
  },

  render: function() {

    var node = this.props.node;
    var options = this.props.options;
    var keyCounter = 0;
    var style;
    if (!this.props.visible) {
      style = {
        display: 'none'
      };
    }
    else {

      if (options.highlightSelected && this.state.selected) {
        style = {
          color: options.selectedColor,
          backgroundColor: options.selectedBackColor
        };
      }
      else {
        style = {
          color: node.color || options.color,
          backgroundColor: node.backColor || options.backColor
        };
      }

      if (!options.showBorder) {
        style.border = 'none';
      }
      else if (options.borderColor) {
        style.border = '1px solid ' + options.borderColor;
      }
    }
/*
    var indents = [];
    for (var i = 0; i < this.props.level-1; i++) {
      indents.push(React.createElement("span", {key: "span"+i, className: "indent"}));
    }
*/
    var expandCollapseIcon;
    if (node.nodes) {
      if (!this.state.expanded) {
        expandCollapseIcon = (
          React.createElement("span", {className: options.expandIcon,
                onClick: this.toggleExpanded.bind(this, node.nodeId)}
          )
        );
      }
      else {
        expandCollapseIcon = (
          React.createElement("span", {className: options.collapseIcon,
                onClick: this.toggleExpanded.bind(this, node.nodeId)}
          )
        );
      }
    }
    else {
      expandCollapseIcon = (
        React.createElement("span", {className: options.emptyIcon})
      );
    }

    var nodeIcon = (
      React.createElement("span", {className: "icon"},
        React.createElement("i", {className: node.icon || options.nodeIcon})
      )
    );

    var nodeText;
    if (options.enableLinks) {
      nodeText = (
        React.createElement("a", {href: node.href},
          node.text
        )
      );
    }
    else {
      nodeText = (
        React.createElement("span", {className: "text"}, node.text)
      );
    }

    var badges;
    if (options.showTags && node.tags) {
      badges = node.tags.map(function (tag) {
        return (
          React.createElement("span", {className: "badge"}, tag)
        );
      });
    }

    var children = [];
    if (node.nodes) {
      var _this = this;
      var nodeIdKey = "TreeNode";
      node.nodes.forEach(function (node) {
        children.push(React.createElement(TreeNode, {node: node, key: nodeIdKey+""+node.nodeId,
                                level: _this.props.level+1,
                                visible: _this.state.expanded && _this.props.visible,
                                options: options}));
      });
    }

    var keyLI = "li"+node.nodeId;
    return (
      React.createElement("li", {key: {keyLI}, className: "list-group-item",
          style: style,
          onClick: this.toggleSelected.bind(this, node.nodeId)
          },
  //      indents,
        expandCollapseIcon,
        nodeIcon,
        nodeText,
        badges,
        <ul>{children}</ul>
      )
    );
  }
});

/* Filters drop down */
var FilterBox=React.createClass(
{
    handleChange: function(event)
    {
        console.log("filter changed to "+event.target.value);
        globalVar.callback(event.target.value);
    },

    render: function()
    {
        var names=[""];

        for(var filterName in filters)
            names.push(filterName);

        var choices=names.map(function(name, index)
        {
            return(
                <option id="filter" value={name} key={index}>{name}</option>
            );
        });

        return (
            <select onChange={this.handleChange}>
                {choices}
            </select>
        );
    }
});

/*** Utility functions ***/

/* Extract just the text inside a node when there might be additional attributes
(in that case the text content is inside "$") */
function getNodeText(nodeElement)
{
    if(!nodeElement)
        return null;
    if(typeof nodeElement==="string" || nodeElement instanceof String
    || typeof nodeElement==="number" || nodeElement instanceof Number)
        return nodeElement;
    return nodeElement.$
}

/*Extract the text object or string from a node */
function getTextObject(nodeElement, tableData, hasTh)
{
    var jsonArr = new Array();
    var txtArr = new Array();

    var boolTh = hasTh;

    if(typeof nodeElement === "string" || typeof nodeElement === "number")
        jsonArr.push(buildTableCellObject(nodeElement, {"key":"string", "text":getNodeText(nodeElement)} ));
    else // Cell contains something other than a string
    {
        // extract contents recursively
        iterate(nodeElement, txtArr);
        jsonArr.push(buildTableCellObject(nodeElement, txtArr, boolTh));
        // check for colspan/rowspan
        if(nodeElement["@rowspan"] || nodeElement["@colspan"])
            tableData.hasSpans=true;
    }

    return jsonArr;
}

/* Extract just the title of a "Section" node. */
function getSectionTitle(nodeElement)
{
    if(!nodeElement)
        return null;
    if (nodeElement.title !== null)
        return nodeElement.title;
}

/*Obtain all text from an unformated node*/
function iterate(obj, jsonArr) {
    for(var key in obj) {
        var elem = obj[key];

        if(typeof elem === "object") {
            iterate(elem, jsonArr); // call recursively
        }
        else{
            var patt = /ID|border|width|height|styleCode|cellpadding|cellspacing|rowspan|colspan|href|align|listType/;

            if(!patt.test(key.toString())){
                if(elem == undefined)
                    jsonArr.push({"key":key.toString(),"text":null});
                else
                    jsonArr.push({"key":key.toString(),"text":elem});
            }
        }
    }
}

/*VV, Get the gender out of the genderCode */
function getGender(patientObj) {
  var gender;
  //console.log("for Gender:" +  JSON.stringify(patientObj));
  if (patientObj.administrativeGenderCode) {
    //if (searchString("displayName", patientObj.administrativeGenderCode)) {
    if (patientObj.administrativeGenderCode["@displayName"]) {
        gender = patientObj.administrativeGenderCode["@displayName"];
    } else if (patientObj.administrativeGenderCode["@code"]) {
        gender = patientObj.administrativeGenderCode["@code"]=="F"?"Female":"Male";
    } else gender = "UNKNOWN";
  }
  return gender;
}

/*VV, Get the Race out of the RaceCode */
function getRace(patientObj) {
  var race = "";

  if (patientObj.raceCode && !Array.isArray(patientObj.raceCode)) {
    if (patientObj.raceCode["@displayName"]) {
        race = patientObj.raceCode["@displayName"];
    }
  } else if (patientObj.raceCode && patientObj.raceCode.length>1) {
    race = "Unkown race";
    if (patientObj.raceCode[0]["@displayName"]) {
        race = patientObj.raceCode[0]["@displayName"];
    }
    for (var i=1; i<patientObj.raceCode.length;i++) {
        if (patientObj.raceCode[i]["@displayName"]) {
            race += " [" + patientObj.raceCode[i]["@displayName"] + "]";
      }
    }
  }
  return race;
}

/*VV, Get the Religion out of the religiousAffiliationCode */
function getReligion(patientObj) {
  var religion;
  if (patientObj.religiousAffiliationCode) {
    if (searchString("@displayName", patientObj.religiousAffiliationCode)) {
        religion = patientObj.religiousAffiliationCode["@displayName"];
    } else religion = "";
  }
  return religion;
}

/*VV, Get the MaritalStatus out of the maritalStatusCode */
function getMaritalStatus(patientObj) {
  var mStatus;
  if (patientObj.maritalStatusCode) {
    if (searchString("@displayName", patientObj.maritalStatusCode)) {
        mStatus = patientObj.maritalStatusCode["@displayName"];
    } else if (patientObj.maritalStatusCode["@code"]) {
        mStatus = patientObj.maritalStatusCode["@code"];
    } else mStatus = "";
  }
  return mStatus;
}

/*VV, Get the Language out of the languageCommunication */
function getLanguage(patientObj) {
  var language, languageCode;
  var languages;
  if (patientObj.languageCommunication && ( patientObj.languageCommunication.languageCode || Array.isArray(patientObj.languageCommunication))) {
    if (Array.isArray(patientObj.languageCommunication)) {
        console.log(JSON.stringify(patientObj.languageCommunication));
        language = "";
        patientObj.languageCommunication.forEach(function(lang) {
            languageCode = lang.languageCode["@code"];

            languages = languageCode.length==2?languages639_1.filter(function(obj) { return obj.code.toLowerCase() === languageCode.toLowerCase() }):languages639_2.filter(function(obj) { return obj.code.toLowerCase() === languageCode.toLowerCase() });
            language += languages.length>0?languages[0].value:"";
            language += " and ";
        });
        language = language.substring(0, language.length-5);
        return language;
    } else
        languageCode = patientObj.languageCommunication.languageCode["@code"];
  } else return "?";

  language = languageCode.length==2?languages639_1.filter(function(obj) { return obj.code.toLowerCase() === languageCode.toLowerCase() }):languages639_2.filter(function(obj) { return obj.code.toLowerCase() === languageCode.toLowerCase() });

  return language.length>0?language[0].value:"?";
}

/* Extract the patient details form the patientRole section of the document */
function getPatientDetails(patientRole)
{
  //console.log("getPatientDetails: " + JSON.stringify(patientRole));
  var patientName=patientRole.patient.name;
  var name=buildName(patientName);
  var dob=moment(patientRole.patient.birthTime["@value"]).format("LL");
  var guardian=patientRole.patient.guardian;
  var address=buildAddress(patientRole.addr);
  var contact=buildTelecom(patientRole.telecom);
  var lastContact = "";
  if (Array.isArray(contact)) {
    contact.forEach(function(cntc) {
        lastContact += cntc.value + " ";
    })
  } else {
    lastContact = contact;
  }
  var guardianName;
  var gender = getGender(patientRole.patient);
  var religion = getReligion(patientRole.patient);
  var race = getRace(patientRole.patient);
  var mStatus = getMaritalStatus(patientRole.patient);
  var age = Math.floor(moment(new Date()).diff(patientRole.patient.birthTime["@value"],'years',true));
  var language = getLanguage(patientRole.patient);
  if(guardian) {
      var guardianEntity=guardian.guardianPerson ? guardian.guardianPerson : guardian.guardianOrganization;
      guardianName=buildName(guardianEntity.name);
  }
  var fName = buildFirstName(patientName);
  var patientMap = {
    "firstName":fName,
    "name":name,
    "dob":dob,
    "guardian":guardian!=undefined?guardian:"---",
    "address":address,
    "contact":lastContact!=undefined?lastContact:"UNKNOWN",
    "gender":gender,
    "race":race,
    "religion":religion,
    "maritalStatus":mStatus,
    "guardianName":guardianName!=undefined?guardianName:"---",
    "language":language,
    "age":age};
  return patientMap;
}

// Check recursively if a node contains a string
function searchString(str, obj) {
    for(var key in obj) {
        if(key.toString() == str){
            return true;
        }

        var elem = obj[key];
        if(typeof elem === "object")
            return searchString(str, elem); // call recursively
    }
    return false;
}

function buildTableCellObject(dataNode, txtObject, hasTh)
{
    return (
    {
        isTh: hasTh,
        text: (txtObject == null ? getNodeText(dataNode) : txtObject),
        colspan: (dataNode["@colspan"] == undefined ? null : dataNode["@colspan"]),
        rowspan: (dataNode["@rowspan"] == undefined ? null : dataNode["@rowspan"])
    });
}

/* Parse table information to a JS object */
function getNodeTableData(tableNode)
{
    if(!tableNode)
        return null;

    var tableData={headers:[], rows:[], hasSpans:false, caption:null};

    //Look for caption tag before the table tag
    if(searchString("caption", tableNode))
        tableData.caption = tableNode.caption;

    //Search for <td> inside <thead>
    var hasSameTd = false;

    try
    {
        // Save table header cells contents to tableData
        if(tableNode.thead)
        {
            //When more than 1 header exist
            if(!Array.isArray(tableNode.thead.tr))
                tableNode.thead.tr = [tableNode.thead.tr];
            else
                tableData.hasSpans=true;


            for(var j=0; j<tableNode.thead.tr.length; j++)
            {
                if(tableNode.thead.tr[j].td)
                    if(tableNode.thead.tr[j].th.length == tableNode.thead.tr[j].td.length)
                        hasSameTd = true;

                tableData.headers.push(new Array());

                if(!Array.isArray(tableNode.thead.tr[j].th))
                    tableNode.thead.tr[j].th=[tableNode.thead.tr[j].th];

                if(tableNode.thead.tr[j].td)
                    if(!Array.isArray(tableNode.thead.tr[j].td))
                        tableNode.thead.tr[j].td=[tableNode.thead.tr[j].td];

                for(var i=0; i<tableNode.thead.tr[j].th.length; i++)
                {
                    tableData.headers[tableData.headers.length-1].push(buildTableCellObject(tableNode.thead.tr[j].th[i], null, true));

                    if(hasSameTd)
                        tableData.headers[tableData.headers.length-1].push(buildTableCellObject(tableNode.thead.tr[j].td[i], null, false));

                    // check for colspan/rowspan
                    if(tableNode.thead.tr[j].th[i]["@rowspan"] || tableNode.thead.tr[j].th[i]["@colspan"])
                        tableData.hasSpans=true;
                }

                if(!hasSameTd && tableNode.thead.tr[j].td)
                {
                    for(var i=0; i<tableNode.thead.tr[j].td.length; i++)
                    {
                        tableData.headers[tableData.headers.length-1].push(buildTableCellObject(tableNode.thead.tr[j].td[i], null, false));

                        // check for colspan/rowspan
                        if(tableNode.thead.tr[j].td[i]["@rowspan"] || tableNode.thead.tr[j].td[i]["@colspan"])
                            tableData.hasSpans=true;
                    }
                }

                hasSameTd = false;
            }
        }
        else
            tableData.hasSpans=true;

        hasSameTd = false;

        //handle multiple tbodies
        if(!Array.isArray(tableNode.tbody))
           tableNode.tbody=[tableNode.tbody];

        if(tableNode.tbody.length > 1)
            tableData.hasSpans = true;


        // Save table body cells contents to tableData
        for(var b=0; b<tableNode.tbody.length; b++)
        {
            debug2=tableNode;

            // if table only has one row, make it an arraw to access it in the loop below
            if(!Array.isArray(tableNode.tbody[b].tr))
               tableNode.tbody[b].tr=[tableNode.tbody[b].tr];

            tableData.rows.push([]);

            for(var r=0; r<tableNode.tbody[b].tr.length; r++)
            {
                tableData.rows[b].push([]);

                if(tableNode.tbody[b].tr[r].th || tableNode.tbody[b].tr[r].td)
                {
                    //if headers are found inside rows
                    if(tableNode.tbody[b].tr[r].th)
                    {
                        if(tableNode.tbody[b].tr[r].td && tableNode.tbody[b].tr[r].th.length == tableNode.tbody[b].tr[r].td.length)
                        {
                            hasSameTd = true;
                            tableData.hasSpans=true;
                        }
                        else
                        {
                            var jsonArr = new Array();
                            var jsonArr = getTextObject(tableNode.tbody[b].tr[r].th, tableData, true);
                            tableData.rows[b][r].push(jsonArr);

                            tableData.hasSpans=true;
                        }
                    }

                    if(tableNode.tbody[b].tr[r].td)
                    {
                        // if only one column is found, make it an array
                        if(!Array.isArray(tableNode.tbody[b].tr[r].td))
                            tableNode.tbody[b].tr[r].td=[tableNode.tbody[b].tr[r].td];

                        for(var c=0; c<tableNode.tbody[b].tr[r].td.length; c++)
                        {
                            if(hasSameTd)
                            {
                                var jsonArr = new Array();
                                jsonArr = getTextObject(tableNode.tbody[b].tr[r].th[c], tableData, true);

                                tableData.rows[b][r].push(jsonArr);
                            }

                            var jsonArr = new Array();
                            jsonArr = getTextObject(tableNode.tbody[b].tr[r].td[c], tableData, false);
                            tableData.rows[b][r].push(jsonArr);
                        }
                    }
                }
                hasSameTd = false;
            }
        }
    }
    catch(err){
        console.log("Error leyendo "+err);
        showAlert("danger", "Error leyendo el archivo");
    }

    return tableData;
}

/* Merge the elements of a person's name to make if readable */
function buildName(nameNode)
{
    if(!nameNode)
        return null;

    var name="";

    // use the first occurrence of name if more than one is found
    if(Array.isArray(nameNode))
        nameNode=nameNode[0];

    if(nameNode.prefix)
        name=getNodeText(nameNode.prefix)+" ";

    if(Array.isArray(nameNode.given))
    {
        for(var i=0; i<nameNode.given.length; i++)
            name+=getNodeText(nameNode.given[i])+" ";
    }
    else
        name+=getNodeText(nameNode.given)+" ";

    name+=getNodeText(nameNode.family);

    if(nameNode.suffix)
        name+=", "+getNodeText(nameNode.suffix);

    return name;
}

/* Get the first name of a person */
function buildFirstName(nameNode)
{
    if(!nameNode)
        return null;

    var name="";

    // use the first occurrence of name if more than one is found
    if(Array.isArray(nameNode))
        nameNode=nameNode[0];

    if(nameNode.prefix)
        name=getNodeText(nameNode.prefix)+" ";

    if(Array.isArray(nameNode.given))
    {
        for(var i=0; i<nameNode.given.length; i++)
            name+=getNodeText(nameNode.given[i])+" ";
    }
    else
        name+=getNodeText(nameNode.given)+" ";

    return name;
}

/* Merge the elements of an address to make if readable */
function buildAddress(addressNode)
{
    if(!addressNode)
        return null;

    var street, city, state, zip;

    // if more than one address, use the first one
    if(Array.isArray(addressNode))
        addressNode=addressNode[0];

    street=getNodeText(addressNode.streetAddressLine);
    city=getNodeText(addressNode.city);
    state=getNodeText(addressNode.state);
    zip=getNodeText(addressNode.postalCode);
    var address = street + ", " + city + ", " + state + ". " + zip;
    return address;
}

/* extract contact methods from the telecom node */
function buildTelecom(telecomNode)
{
    if(!telecomNode)
        return null;

    if(Array.isArray(telecomNode))
    {
        var contact = [];
        while (contact.length > 0) {
            contact.pop();
        }
        for(var i=0; i<telecomNode.length; i++)
        {
            var value=telecomNode[i]["@value"];
            contact.push({value});
        }
        return contact;
    }

    return telecomNode["@value"];
}

//Alerts function
 function showAlert(alertType, message)
 {
   var alert=$("<div/>").addClass("alert alert-dismissable alert-"+alertType)
   var closeBtn=$("<a/>").attr("href", "#").addClass("close").attr("data-dismiss", "alert").html("&times;");

   alert.html(closeBtn);
   alert.append(message);

   $("#alerts").append(alert);

   alert.fadeTo(2000, 500).slideUp(1500, function()
   {
     alert.alert("close");
   });
 }

ReactDOM.render(<XMLForm/>, document.getElementById("modal-container"));
ReactDOM.render(<TreeView treeData={menuData}/>, document.getElementById("tree_menu"));
ReactDOM.render(<FilterBox/>, document.getElementById("filter-container"));
