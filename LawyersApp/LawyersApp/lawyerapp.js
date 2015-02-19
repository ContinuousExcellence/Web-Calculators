//Global Vars

var savedRes;
var currentResObject;
var selectedItem;
var nl = "\r\n";
var ht = "\t";


var rc_name;
var rc_phone;
var rc_email;
var rc_postcode;
var rc_comment;

var_Section1_1a='You said you have a will';
var_Section1_1b='You have not ticked any of the below questions';
	
var_Section1_1b_Q1='No';
var_Section1_1b_Q2='No';
var_Section1_1b_Q3='No';
var_Section1_1b_Q4='No';
var_Section1_1b_Q5='No';
var_Section1_1b_Q6='No';
var_Section1_1b_Q7='No';
var_Section1_1b_Q8='No';
var_Section1_1b_Q9='No';
var_Section1_1b_Q10='No';
var_Section1_1b_Q11='No';

var_Section1_1c='You have not ticked any of the below questions';	
var_Section1_1c_Q1='No';
var_Section1_1c_Q2='No';
var_Section1_1c_Q3='No';
	
var_Section2_2a ='No';
	
var_Section2_2b_Q1='No';
var_Section2_2b_Q2='No';
var_Section2_2b_Q3='No';
var_Section2_2b_Q4='No';
var_Section2_2b_Q5='No';
	
var_Section2_2c ='You have not ticked this question';
var_Section2_2d ='You have not ticked this question';
var_Section2_2e ='No';
var_Section2_2f ='You have not ticked this question';
var_Section2_2g ='You have not ticked this question';
//Keys

var KEY_LOCAL_STORAGE_RESULTS = 'lawyerapp_results'

function selectItem(key){
    selectedItem = key;
}

function composeResObject(var_Section1_1a,var_Section1_1b_Q1,var_Section1_1b_Q2,var_Section1_1b_Q3,var_Section1_1b_Q4,var_Section1_1b_Q5,var_Section1_1b_Q6,var_Section1_1b_Q7,var_Section1_1b_Q8,var_Section1_1b_Q9,var_Section1_1b_Q10,var_Section1_1b_Q11,
								var_Section1_1c_Q1,var_Section1_1c_Q2,var_Section1_1c_Q3,var_Section2_2a,var_Section2_2b_Q1,var_Section2_2b_Q2,var_Section2_2b_Q3,var_Section2_2b_Q4,var_Section2_2b_Q5,
								var_Section2_2c,var_Section2_2d,var_Section2_2e,var_Section2_2f,var_Section2_2g,note){
    return {
        'var_Section1_1a' : var_Section1_1a,
		
		'var_Section1_1b' : var_Section1_1b,
		'var_Section1_1b_Q1' : var_Section1_1b_Q1,
		'var_Section1_1b_Q2' : var_Section1_1b_Q2,
		'var_Section1_1b_Q3' : var_Section1_1b_Q3,
		'var_Section1_1b_Q4' : var_Section1_1b_Q4,
		'var_Section1_1b_Q5' : var_Section1_1b_Q5,
		'var_Section1_1b_Q6' : var_Section1_1b_Q6,
		'var_Section1_1b_Q7' : var_Section1_1b_Q7,
		'var_Section1_1b_Q8' : var_Section1_1b_Q8,
		'var_Section1_1b_Q9' : var_Section1_1b_Q9,
		'var_Section1_1b_Q10' : var_Section1_1b_Q10,
		'var_Section1_1b_Q11' : var_Section1_1b_Q11,
		
		'var_Section1_1c' : var_Section1_1c,
		'var_Section1_1c_Q1':var_Section1_1c_Q1,
		'var_Section1_1c_Q2':var_Section1_1c_Q2,
		'var_Section1_1c_Q3':var_Section1_1c_Q3,
	
		'var_Section2_2a' : var_Section2_2a,
	
		'var_Section2_2b_Q1' : var_Section2_2b_Q1,
		'var_Section2_2b_Q2' : var_Section2_2b_Q2,
		'var_Section2_2b_Q3' : var_Section2_2b_Q3,
		'var_Section2_2b_Q4' : var_Section2_2b_Q4,
		'var_Section2_2b_Q5' : var_Section2_2b_Q5,
	
		'var_Section2_2c' : var_Section2_2c,
		'var_Section2_2d' : var_Section2_2d,
		'var_Section2_2e' : var_Section2_2e,
		'var_Section2_2f' : var_Section2_2f,
		'var_Section2_2g' : var_Section2_2g,
		
		'note' : note
    };
}

function composeSaveResObject(name,note){
	return{
		'name' : name,
		'note' : note
	};
}

function addResObject(name, object){
    savedRes[name] = object;
}

function getResObject(name){
    return savedRes[name];
}

function removeResObject(name){
    delete savedRes[name];
}

function restoreResObjects(){

    if(typeof localStorage.getItem(KEY_LOCAL_STORAGE_RESULTS) == 'undefined' ||
        localStorage.getItem(KEY_LOCAL_STORAGE_RESULTS) == null){
        savedRes = {};
        localStorage.setItem(KEY_LOCAL_STORAGE_RESULTS, JSON.stringify(savedRes) );
    }else{
        savedRes = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE_RESULTS));
    }

}



function saveResObjects(){
    localStorage.setItem(KEY_LOCAL_STORAGE_RESULTS, JSON.stringify(savedRes) );
}

var viewSavedRes = function(){
    jQuery.mobile.changePage(jQuery('#page_lawyerapp_view_result'), {transition:'slide'});
}

function deletesavedcalc(){
    removeResObject(selectedItem);
    saveResObjects();
    restoreResObjects();
    jQuery.mobile.changePage(jQuery('#page_lawyerapp_saved_results'), {transition:'slide', reverse: true});
}

function showHideViewSavedRes(){
    var numItems = 0;
    for (var key in savedRes) {
        numItems++;
    }
    if(numItems == 0){
        jQuery('#button_view_saved_res').hide();
    }else{
        jQuery('#button_view_saved_res').show();
    }
}

function hideSMS()
{
        debugger;
		jQuery('#divEmail').hide();
		iOS = false, p = navigator.platform;
        if( p === 'iPad') {
          iOS = true;
        }
        if (iOS === false) {
          jQuery('#divEmail').hide();
		  jQuery('#divSMSEmail').show();
        }
		else
		{
			jQuery('#divEmail').show();
			jQuery('#divSMSEmail').hide();
		}

}

function hideSMSSaved()
{
        debugger;
		jQuery('#divSaveEmail').hide();
		ipad = false, p = navigator.platform;
        if( p === 'iPad') {
          iOS = true;
        }
        if (iOS === false) {
          jQuery('#divSaveEmail').hide();
		  jQuery('#divSaveSMSEmail').show();
        }
		else
		{
			jQuery('#divSaveEmail').show();
			jQuery('#divSaveSMSEmail').hide();
		}

}


jQuery(document).ready(function () {

    mostHelp.mostSetBack('-1', 'Done');
	
	
   /**
     * Set the back actions for pages. Just for safety, I'll set them all to zero on page hide
     */

        //Home - Leave Applet
    jQuery('#page_lawyerapp_home').live('pagebeforeshow', function(){
        mostHelp.mostSetBack('-1', 'Done');
    });
    jQuery('#page_lawyerapp_home').live('pagebeforehide', function(){
        mostHelp.mostSetBack('0', 'Back');
    });

    //Result - back to calc
   jQuery('#page_lawyerapp_result').live('pagebeforeshow', function () {
        mostHelp.mostSetBack('javascript:jQuery.mobile.changePage(jQuery(\'#page_lawyerapp_home\'), {transition:\'slide\',reverse:true});', 'Details');
    });
   jQuery('#page_lawyerapp_result').live('pagebeforehide', function () {
        mostHelp.mostSetBack('0', 'Back');
    });

    //Save - back to result
   jQuery('#page_lawyerapp_save').live('pagebeforeshow', function () {
        mostHelp.mostSetBack('javascript:jQuery.mobile.changePage(jQuery(\'#page_lawyerapp_result\'), {transition:\'slide\',reverse:true});', 'Back');
		//Customize color for Save Page
		jQuery('.ui-body-a, .ui-overlay-a').css('color', mostHelp.getCustomizationsObject().color );
		jQuery('input.ui-input-text, textarea.ui-input-text').css('color', mostHelp.getCustomizationsObject().inputTextColor );
		jQuery('#button_lawyerapp_res_save').css('color', mostHelp.getCustomizationsObject().footerButtonFontColor);
		jQuery('#button_lawyerapp_res_save').css('background', mostHelp.getCustomizationsObject().footerButtonColor);
    });
   jQuery('#page_lawyerapp_save').live('pagebeforehide', function () {
        mostHelp.mostSetBack('0', 'Back');
    });

    //Saved Calcs - back to calc
    jQuery('#page_lawyerapp_saved_results').live('pagebeforeshow', function () {
        mostHelp.mostSetBack('javascript:jQuery.mobile.changePage(jQuery(\'#page_lawyerapp_home\'), {transition:\'slide\',reverse:true});', 'Details');
    });
    jQuery('#page_lawyerapp_saved_results').live('pagebeforehide', function () {
        mostHelp.mostSetBack('0', 'Back');
    });

    //View Calc - back to saved calcs
    jQuery('#page_lawyerapp_view_result').live('pagebeforeshow', function () {
        mostHelp.mostSetBack('javascript:jQuery.mobile.changePage(jQuery(\'#page_lawyerapp_saved_results\'), {transition:\'slide\',reverse:true});', 'Back');
    });
    jQuery('#page_lawyerapp_view_result').live('pagebeforehide', function () {
        mostHelp.mostSetBack('0', 'Back');
    });

    restoreResObjects();

    showHideViewSavedRes();
	
	hideSMS();
	
	hideSMSSaved();


    /**
     * Home page. Make sure I process the Saved Calculations button
     */
	jQuery('#page_lawyerapp_home').live('pagebeforeshow', function () {
        showHideViewSavedRes();
    });

   	//jQuery('#dynamic_home_title').html("Lawyers Application");
	jQuery('#dynamic_home_title').html(mostHelp.getCustomizationsObject().calcTitle);
    jQuery('#dynamic_disclaimer_1').html(mostHelp.getCustomizationsObject().disclaimer);
    jQuery('#dynamic_disclaimer_2').html(mostHelp.getCustomizationsObject().disclaimer);
	
	//Customizing color theme for the first page
	jQuery('#dynamic_home_title').css('color',mostHelp.getCustomizationsObject().titleColor);
	jQuery('.ui-mobile [data-role=page],.ui-mobile [data-role=dialog],.ui-page').css('background', mostHelp.getCustomizationsObject().background );
	jQuery('.ui-body-a,.ui-overlay-a').css('color', mostHelp.getCustomizationsObject().color );
	jQuery('input.ui-input-text, textarea.ui-input-text').css('color', mostHelp.getCustomizationsObject().inputTextColor);
	jQuery('.ui-header .ui-btn-inner, .ui-footer .ui-btn-inner, .ui-mini .ui-btn-inner').css('color', mostHelp.getCustomizationsObject().footerButtonFontColor  );
	jQuery('.ui-header .ui-btn-inner, .ui-footer .ui-btn-inner, .ui-mini .ui-btn-inner').css('background', mostHelp.getCustomizationsObject().footerButtonColor  );
	jQuery('.ui-btn-up-a').css('color', mostHelp.getCustomizationsObject().buttonFontColor );
	jQuery('.ui-btn-up-a').css('background', mostHelp.getCustomizationsObject().buttonColor );	
	jQuery('.stickyfooter').css('background', mostHelp.getCustomizationsObject().footerBarColor );	
	jQuery('.disclaimer').css('color', mostHelp.getCustomizationsObject().disclaimerFontColor);   
   
    //show or hide the version
    if(false){
        jQuery('#dynamic_version').html(mostHelp.getConfigObject().version);
    }	
	
	jQuery('#Section1_1a').change(function() 
	{ 
		if(jQuery('#Section1_1a').attr('checked'))
		{
     		jQuery('#Section1_1a_x').html('You need a will.');
			var_Section1_1a='You need a will.';
		}		
	});

	jQuery('#Section1_1b_Q1').change(function() 
	{ 
		if(jQuery('#Section1_1b_Q1').attr('checked'))
		{
			var_Section1_1b_Q1='Yes';
			var_Section1_1b='You said yes to one or more of the below questions.Your current will may either be invalid, ineffective or may no longer carry out your wishes properly.  You need to urgently review your Will and either make a new will or make a codicil to your existing will.';
			jQuery('#Section1_1b_Q1_x').html('Yes');
			jQuery('#Section1_1b_x').html('You said yes to one or more of the below questions.Your current will may either be invalid, ineffective or may no longer carry out your wishes properly.  You need to urgently review your Will and either make a new will or make a codicil to your existing will.');
		}		
	});
	
	jQuery('#Section1_1b_Q2').change(function() 
	{ 
		if(jQuery('#Section1_1b_Q2').attr('checked'))
		{
			var_Section1_1b_Q2='Yes';
			var_Section1_1b='You said yes to one or more of the below questions.Your current will may either be invalid, ineffective or may no longer carry out your wishes properly.  You need to urgently review your Will and either make a new will or make a codicil to your existing will.';
			//jQuery('#Section1_1b_Q2_x').val(var_Section1_1b_Q2);
			jQuery('#Section1_1b_x').html('You said yes to one or more of the below questions.Your current will may either be invalid, ineffective or may no longer carry out your wishes properly.  You need to urgently review your Will and either make a new will or make a codicil to your existing will.');
		}		
	});
	
	jQuery('#Section1_1b_Q3').change(function() 
	{ 
		if(jQuery('#Section1_1b_Q3').attr('checked'))
		{
			var_Section1_1b_Q3='Yes';
			var_Section1_1b='You said yes to one or more of the below questions.Your current will may either be invalid, ineffective or may no longer carry out your wishes properly.  You need to urgently review your Will and either make a new will or make a codicil to your existing will.';
			
			jQuery('#Section1_1b_Q3_x').html('Yes');
			jQuery('#Section1_1b_x').html('You said yes to one or more of the below questions.Your current will may either be invalid, ineffective or may no longer carry out your wishes properly.  You need to urgently review your Will and either make a new will or make a codicil to your existing will.');
		}		
	});
	
	jQuery('#Section1_1b_Q4').change(function() 
	{ 
		if(jQuery('#Section1_1b_Q4').attr('checked'))
		{
			var_Section1_1b_Q4='Yes';
			var_Section1_1b='You said yes to one or more of the below questions.Your current will may either be invalid, ineffective or may no longer carry out your wishes properly.  You need to urgently review your Will and either make a new will or make a codicil to your existing will.';
			
			jQuery('#Section1_1b_Q4_x').html('Yes');
			jQuery('#Section1_1b_x').html('You said yes to one or more of the below questions.Your current will may either be invalid, ineffective or may no longer carry out your wishes properly.  You need to urgently review your Will and either make a new will or make a codicil to your existing will.');
		}
		
	});
	
	jQuery('#Section1_1b_Q5').change(function() 
	{
 
		if(jQuery('#Section1_1b_Q5').attr('checked'))
		{
			var_Section1_1b_Q5='Yes';
			var_Section1_1b='You said yes to one or more of the below questions.Your current will may either be invalid, ineffective or may no longer carry out your wishes properly.  You need to urgently review your Will and either make a new will or make a codicil to your existing will.';
			
			jQuery('#Section1_1b_Q5_x').html('Yes');
			jQuery('#Section1_1b_x').html('You said yes to one or more of the below questions.Your current will may either be invalid, ineffective or may no longer carry out your wishes properly.  You need to urgently review your Will and either make a new will or make a codicil to your existing will.');
		}
		
	});
	
	jQuery('#Section1_1b_Q6').change(function() 
	{
 
		if(jQuery('#Section1_1b_Q6').attr('checked'))
		{
			var_Section1_1b_Q6='Yes';
			var_Section1_1b='You said yes to one or more of the below questions.Your current will may either be invalid, ineffective or may no longer carry out your wishes properly.  You need to urgently review your Will and either make a new will or make a codicil to your existing will.';
			
			jQuery('#Section1_1b_Q6_x').html('Yes');
			jQuery('#Section1_1b_x').html('You said yes to one or more of the below questions.Your current will may either be invalid, ineffective or may no longer carry out your wishes properly.  You need to urgently review your Will and either make a new will or make a codicil to your existing will.');
		}
		
	});
	
	jQuery('#Section1_1b_Q7').change(function() 
	{
 
		if(jQuery('#Section1_1b_Q7').attr('checked'))
		{
			var_Section1_1b_Q7='Yes';
			var_Section1_1b='You said yes to one or more of the below questions.Your current will may either be invalid, ineffective or may no longer carry out your wishes properly.  You need to urgently review your Will and either make a new will or make a codicil to your existing will.';
			
			jQuery('#Section1_1b_Q7_x').html('Yes');
			jQuery('#Section1_1b_x').html('You said yes to one or more of the below questions.Your current will may either be invalid, ineffective or may no longer carry out your wishes properly.  You need to urgently review your Will and either make a new will or make a codicil to your existing will.');
		}
		
	});
	
	jQuery('#Section1_1b_Q8').change(function() 
	{
 
		if(jQuery('#Section1_1b_Q8').attr('checked'))
		{
			var_Section1_1b_Q8='Yes';
			var_Section1_1b='You said yes to one or more of the below questions.Your current will may either be invalid, ineffective or may no longer carry out your wishes properly.  You need to urgently review your Will and either make a new will or make a codicil to your existing will.';
			
			jQuery('#Section1_1b_Q8_x').html('Yes');
			jQuery('#Section1_1b_x').html('You said yes to one or more of the below questions.Your current will may either be invalid, ineffective or may no longer carry out your wishes properly.  You need to urgently review your Will and either make a new will or make a codicil to your existing will.');
		}
		
	});
	
	jQuery('#Section1_1b_Q9').change(function() 
	{
 
		if(jQuery('#Section1_1b_Q9').attr('checked'))
		{
			var_Section1_1b_Q9='Yes';
			var_Section1_1b='You said yes to one or more of the below questions.Your current will may either be invalid, ineffective or may no longer carry out your wishes properly.  You need to urgently review your Will and either make a new will or make a codicil to your existing will.';
			
			jQuery('#Section1_1b_Q9_x').html('Yes');
			jQuery('#Section1_1b_x').html('You said yes to one or more of the below questions.Your current will may either be invalid, ineffective or may no longer carry out your wishes properly.  You need to urgently review your Will and either make a new will or make a codicil to your existing will.');
		}
		
	});
	
	jQuery('#Section1_1b_Q10').change(function() 
	{
 
		if(jQuery('#Section1_1b_Q10').attr('checked'))
		{
			var_Section1_1b_Q10='Yes';
			var_Section1_1b='You said yes to one or more of the below questions.Your current will may either be invalid, ineffective or may no longer carry out your wishes properly.  You need to urgently review your Will and either make a new will or make a codicil to your existing will.';
			
			jQuery('#Section1_1b_Q10_x').html('Yes');
			jQuery('#Section1_1b_x').html('You said yes to one or more of the below questions.Your current will may either be invalid, ineffective or may no longer carry out your wishes properly.  You need to urgently review your Will and either make a new will or make a codicil to your existing will.');
		}
		
	});
	
	jQuery('#Section1_1b_Q11').change(function() 
	{
 
		if(jQuery('#Section1_1b_Q11').attr('checked'))
		{
			var_Section1_1b_Q11='Yes';
			var_Section1_1b='You said yes to one or more of the below questions.Your current will may either be invalid, ineffective or may no longer carry out your wishes properly.  You need to urgently review your Will and either make a new will or make a codicil to your existing will.';
			
			jQuery('#Section1_1b_Q11_x').html('Yes');
			jQuery('#Section1_1b_x').html('You said yes to one or more of the below questions.Your current will may either be invalid, ineffective or may no longer carry out your wishes properly.  You need to urgently review your Will and either make a new will or make a codicil to your existing will.');
		}
		
	});
	
	jQuery('#Section1_1c_Q1').change(function() 
	{ 
		if(jQuery('#Section1_1c_Q1').attr('checked'))
		{
			var_Section1_1c_Q1='Yes';
			var_Section1_1c='You said yes to one or more of the below questions.You might benefit from a Will incorporating testamentary trusts or protective trusts or both.';
			jQuery('#Section1_1c_Q1_x').html('Yes');
			jQuery('#Section1_1c_x').html('You said yes to one or more of the below questions.You might benefit from a Will incorporating testamentary trusts or protective trusts or both.');
		}
		
	});
	
	jQuery('#Section1_1c_Q2').change(function() 
	{
 
		if(jQuery('#Section1_1c_Q2').attr('checked'))
		{
			var_Section1_1c_Q1='Yes';
			var_Section1_1c='You said yes to one or more of the below questions.You might benefit from a Will incorporating testamentary trusts or protective trusts or both.';
			
			jQuery('#Section1_1c_Q2_x').html('Yes');
			jQuery('#Section1_1c_x').html('You said yes to one or more of the below questions.You might benefit from a Will incorporating testamentary trusts or protective trusts or both..');
		}
		
	});
	
	jQuery('#Section1_1c_Q3').change(function() 
	{
 
		if(jQuery('#Section1_1c_Q3').attr('checked'))
		{
			var_Section1_1c_Q1='Yes';
			var_Section1_1c='You said yes to one or more of the below questions.You might benefit from a Will incorporating testamentary trusts or protective trusts or both.';
			
			jQuery('#Section1_1c_Q3_x').html('Yes');
			jQuery('#Section1_1c_x').html('You said yes to one or more of the below questions.You might benefit from a Will incorporating testamentary trusts or protective trusts or both.');
		}
		
	});
	
	jQuery('#Section2_2a').change(function() 
	{
 
		if(jQuery('#Section2_2a').attr('checked'))
		{
			var_Section2_2a = 'Yes';
			jQuery('#Section2_2a_x').html('Yes');
			jQuery('#Section2_2a_y').html('Yes');
		}
		
	});
	
	
	jQuery('#Section2_2b_Q1').change(function() 
	{
 
		if(jQuery('#Section2_2b_Q1').attr('checked'))
		{
			var_Section2_2b_Q1='Yes';
			jQuery('#Section2_2b_Q1_x').html('Yes');
		}
		
	});
	
	jQuery('#Section2_2b_Q2').change(function() 
	{
 
		if(jQuery('#Section2_2b_Q2').attr('checked'))
		{
			var_Section2_2b_Q2='Yes';
			jQuery('#Section2_2b_Q2_x').html('Yes');
		}
		
	});
	
	jQuery('#Section2_2b_Q3').change(function() 
	{
 
		if(jQuery('#Section2_2b_Q3').attr('checked'))
		{
			var_Section2_2b_Q3='Yes';
			jQuery('#Section2_2b_Q3_x').html('Yes');
		}
		
	});
	
	jQuery('#Section2_2b_Q4').change(function() 
	{
 
		if(jQuery('#Section2_2b_Q4').attr('checked'))
		{
			var_Section2_2b_Q4='Yes';
			jQuery('#Section2_2b_Q4_x').html('Yes');
		}
		
	});
	
	jQuery('#Section2_2b_Q5').change(function() 
	{
 
		if(jQuery('#Section2_2b_Q5').attr('checked'))
		{
			var_Section2_2b_Q5='Yes';
			jQuery('#Section2_2b_Q5_x').html('Yes');
		}
		
			
	});
	
	jQuery('#Section2_2c').change(function() 
	{
 
		if(jQuery('#Section2_2c').attr('checked'))
		{
			var_Section2_2c='You may need an Advanced Health Directive (AHD)';
			jQuery('#Section2_2c_x').html('You may need an Advanced Health Directive (AHD)');
		}
	});
	
	jQuery('#Section2_2d').change(function() 
	{
 
		if(jQuery('#Section2_2d').attr('checked'))
		{
			var_Section2_2d='If you have not done so already, you may need the trust deed reviewed in light of the High Court decision in Commissioner of Taxation v Bamford (2010).';
			jQuery('#Section2_2d_x').html('If you have not done so already, you may need the trust deed reviewed in light of the High Court decision in Commissioner of Taxation v Bamford (2010).');
		}
		
	});
	
	jQuery('#Section2_2e').change(function() 
	{
 
		if(jQuery('#Section2_2e').attr('checked'))
		{
			var_Section2_2e='Yes';
			jQuery('#Section2_2e_x').html('Yes');
		}
		
	});
	
	jQuery('#Section2_2f').change(function() 
	{
 
		if(jQuery('#Section2_2f').attr('checked'))
		{
			var_Section2_2f='Most life insurance policies will pass to the beneficiary stated in the policy, regardless of what your will says.  You should review the policy to ensure the proceeds will pass to the right people on your death';
			jQuery('#Section2_2f_x').html('Most life insurance policies will pass to the beneficiary stated in the policy, regardless of what your will says.  You should review the policy to ensure the proceeds will pass to the right people on your death');
		}
		
	});
	
	jQuery('#Section2_2g').change(function() 
	{
 
		if(jQuery('#Section2_2g').attr('checked'))
		{
			var_Section2_2g='You may need a shareholders’ agreement or partnership agreement as the case may be unless you already have one.  It is important to set out clearly the framework for how the business will operate and a good shareholders or partnership agreement will deal with a number of areas';
			jQuery('#Section2_2g_x').html('You may need a shareholders’ agreement or partnership agreement as the case may be unless you already have one.  It is important to set out clearly the framework for how the business will operate and a good shareholders or partnership agreement will deal with a number of areas');
		}
		
	});
	

  	/**
     * Submit Button
     */
    jQuery('#button_lawyerapp_result').on('click', function () {
      
                 
                jQuery('#Section1_1b_Q2_x').html(var_Section1_1b_Q2);
		jQuery.mobile.changePage(jQuery('#page_lawyerapp_result'), {transition: 'slide'});
		
		
		currentResObject = composeResObject(var_Section1_1a,var_Section1_1b_Q1,var_Section1_1b_Q2,var_Section1_1b_Q3,var_Section1_1b_Q4,var_Section1_1b_Q5,var_Section1_1b_Q6,var_Section1_1b_Q7,var_Section1_1b_Q8,var_Section1_1b_Q9,var_Section1_1b_Q10,var_Section1_1b_Q11,
								var_Section1_1c_Q1,var_Section1_1c_Q2,var_Section1_1c_Q3,var_Section2_2a,var_Section2_2b_Q1,var_Section2_2b_Q2,var_Section2_2b_Q3,var_Section2_2b_Q4,var_Section2_2b_Q5,
								var_Section2_2c,var_Section2_2d,var_Section2_2e,var_Section2_2f,var_Section2_2g,'');
	
	
		savedRes=composeSaveResObject();
    });

     
     
    
	/**
     * Save button
     */
    jQuery('#button_lawyerapp_res_save').on('click', function(){
        //alert('button clicked');
		debugger;
		currentResObject['note'] = jQuery('#resnote').val();
		var cName = jQuery('#savename').val();

       if(typeof savedRes[cName] != 'undefined'){
            mostHelp.mostDialog(
                "Save Results",
                "A saved result with that name already exists. Please enter a different name.",
                "OK");
        }else{
            addResObject(cName,currentResObject);
            saveResObjects();
            restoreResObjects();
            jQuery.mobile.changePage(jQuery('#page_lawyerapp_saved_results'), {transition:'slide'});
			}
        
    });

    /**
     * Saved Calculations Page
     */
    jQuery('#page_lawyerapp_saved_results').live('pagebeforeshow', function () {

        selectItem(undefined);

        var savedResHTML = '<ul data-role="listview" id="lawyerapp_saved_results_list" class="ui-corner-all" data-theme="a">';
        var numItems = 0;
        for (var key in savedRes) {

            var savedRes1 = savedRes[key];

            var savedResultHTML = '<li><a href="" onclick="selectItem(\''+key+'\');viewSavedRes();" >'+key+'<br/>' +
                '<span style="font-weight: normal;font-size:85%;">'+savedRes1['note']+'</span></a></li>';

            savedResHTML+=savedResultHTML;

            numItems++;
        }

        savedResHTML += "</ul>";
		if(numItems > 0){
            jQuery('#lawyerapp_saved_results').html(savedResHTML);
            jQuery('#lawyerapp_saved_results_list').listview();
			//Customize color theme for Saved Results Page
			jQuery('.ui-btn-up-a:visited, .ui-btn-up-a a.ui-link-inherit').css('color',mostHelp.getCustomizationsObject().buttonFontColor);
			jQuery('.ui-btn-up-a:visited, .ui-btn-up-a a.ui-link-inherit').css('background',mostHelp.getCustomizationsObject().buttonColor);			
        }else{
            jQuery('#lawyerapp_saved_results').html('<h3>No saved calculations...</h3>');
			//Customize color theme for Saved Calculation Page
			jQuery('#lawyerapp_saved_results').css('color', mostHelp.getCustomizationsObject().color);
			debugger;
            jQuery.mobile.changePage(jQuery('#page_lawyerapp_home'), {transition:'slide', reverse: true});
            return;
        }   


    });

    /**
     * Saved Calculation display
     */
    jQuery('#page_lawyerapp_view_result').live('pagebeforeshow', function () {

        if(typeof selectedItem == 'undefined'){
            jQuery.mobile.changePage(jQuery('#page_lawyerapp_saved_results'), { transition: 'slide', reverse: true });
            return;
        }

		var savedItem = savedRes[selectedItem];
        jQuery('#rcs_name').html(selectedItem);
        jQuery('#Section1_1a_y').html(savedItem.var_Section1_1a);
		
		jQuery('#Section1_1b_y').html(savedItem.var_Section1_1b);
        jQuery('#Section1_1b_Q1_y').html(savedItem.var_Section1_1b_Q1);
		jQuery('#Section1_1b_Q2_y').html(savedItem.var_Section1_1b_Q2);
		jQuery('#Section1_1b_Q3_y').html(savedItem.var_Section1_1b_Q3);
		jQuery('#Section1_1b_Q4_y').html(savedItem.var_Section1_1b_Q4);
		jQuery('#Section1_1b_Q5_y').html(savedItem.var_Section1_1b_Q5);
		jQuery('#Section1_1b_Q6_y').html(savedItem.var_Section1_1b_Q6);
		jQuery('#Section1_1b_Q7_y').html(savedItem.var_Section1_1b_Q7);
		jQuery('#Section1_1b_Q8_y').html(savedItem.var_Section1_1b_Q8);
		jQuery('#Section1_1b_Q9_y').html(savedItem.var_Section1_1b_Q9);
		jQuery('#Section1_1b_Q10_y').html(savedItem.var_Section1_1b_Q10);
		jQuery('#Section1_1b_Q11_y').html(savedItem.var_Section1_1b_Q11);
		
		jQuery('#Section1_1c_y').html(savedItem.var_Section1_1c);
		jQuery('#Section1_1c_Q1_y').html(savedItem.var_Section1_1c_Q1);
		jQuery('#Section1_1c_Q2_y').html(savedItem.var_Section1_1c_Q2);
		jQuery('#Section1_1c_Q3_y').html(savedItem.var_Section1_1c_Q3);
		
		jQuery('#Section2_2a_y').html(savedItem.var_Section2_2a);
		
		jQuery('#Section2_2b_Q1_y').html(savedItem.var_Section2_2b_Q1);
		jQuery('#Section2_2b_Q2_y').html(savedItem.var_Section2_2b_Q2);
		jQuery('#Section2_2b_Q3_y').html(savedItem.var_Section2_2b_Q3);
		jQuery('#Section2_2b_Q4_y').html(savedItem.var_Section2_2b_Q4);
		jQuery('#Section2_2b_Q5_y').html(savedItem.var_Section2_2b_Q5);
		
		jQuery('#Section2_2c_y').html(savedItem.var_Section2_2c);
		jQuery('#Section2_2d_y').html(savedItem.var_Section2_2d);
		jQuery('#Section2_2e_y').html(savedItem.var_Section2_2e);
		jQuery('#Section2_2f_y').html(savedItem.var_Section2_2f);
		jQuery('#Section2_2g_y').html(savedItem.var_Section2_2g);
        currentResObject = savedRes[selectedItem];
		
		//Customize color for View Calculation Page
		jQuery('.sharebtnsdiv .ui-btn').css('background', mostHelp.getCustomizationsObject().buttonColor );
		jQuery('.sharebtnsdiv .ui-btn').css('color', mostHelp.getCustomizationsObject().buttonFontColor );
		jQuery('#button_lawyersapp_delete').css('color', mostHelp.getCustomizationsObject().footerButtonFontColor);
		jQuery('#button_lawyersapp_delete').css('background', mostHelp.getCustomizationsObject().footerButtonColor);
    });

    /**
     * Handle share buttons
     */

    var nl = "\r\n";
    var ht = "\t";

    jQuery('#btn_share_sms_result').on('click', function(){
        shareVia('sms');
    });
    jQuery('#btn_share_email_result').on('click', function(){
        shareVia('mailto');
    });
	
	jQuery('#button_lawyerapp_emailsubmit').on('click', function(){
        shareVia('email');
    });
	
	jQuery('#btn_share_only_email_result').on('click', function(){
		shareVia('mailto');
    });

    jQuery('#btn_share_sms_saved').on('click', function(){
        shareVia('sms');
    });
    jQuery('#btn_share_email_saved').on('click', function(){
        shareVia('mailto');
    });
	
	jQuery('#btn_share_only_email_saved').on('click', function(){
        shareVia('mailto');
    });
	
	function shareVia(method){
        var subject = 'LawyerApp Result';
        var body = '';
		
        if(typeof currentResObject.name == 'undefined'){
            currentResObject.name = '';
            body+=currentResObject.name+nl;
        }
        if(currentResObject.name != ''){
            subject+=': '+currentResObject.name;
        }
		if(method == 'email'){
            body+='Name :' + ht + jQuery('#rc_name').val() + nl +
			'Phone No. :' + ht + jQuery('#rc_phone').val() + nl +
			'Postcode :' + ht + jQuery('#rc_postcode').val() + nl +
			'Comments :' + ht + jQuery('#rc_comment').val() + nl+ nl+
			'The inputs of the client - '+nl;
        }
        body+=
		'Section 1 : Last Will & Testament'+ ht + nl + 
		'1.a'+ ht + nl + 
		'You do not have a will' + nl +
		currentResObject.var_Section1_1a +nl+
		'1.b'+ ht + nl +
		currentResObject.var_Section1_1b +nl+
		currentResObject.var_Section1_1b_Q1 + ht + 'You have married and your will was not specified to be made in contemplation of your marriage' +nl+
		currentResObject.var_Section1_1b_Q2 + ht + 'You have separated or divorced and your ex-partner/spouse was a beneficiary under your Will' +nl+
		currentResObject.var_Section1_1b_Q3 + ht + 'You have entered into or ended a de facto or a registered relationship' +nl+
		currentResObject.var_Section1_1b_Q4 + ht + 'You want to change the beneficiaries of your Will or the amount they will receive' +nl+ 
		currentResObject.var_Section1_1b_Q5 + ht + 'You have changed your name, or someone named in the Will has changed theirs' +nl+
		currentResObject.var_Section1_1b_Q6 + ht + 'An executor has died or becomes unwilling or unsuitable to act as executor' +nl+
		currentResObject.var_Section1_1b_Q7 + ht + 'A beneficiary (someone who has been left something in the Will) has died' +nl+
		currentResObject.var_Section1_1b_Q8 + ht + 'You have gifted specific property to a beneficiary which has now been sold, given away, placed in trust or which changes its character (for example, you bequeath shares in a company which restructures its share capital).' +nl+ 
		currentResObject.var_Section1_1b_Q9 + ht + 'A beneficiary marries or enters a de facto relationship with any person who you do not wish to	benefit from your estate. ' +nl+
		currentResObject.var_Section1_1b_Q10 + ht + 'You start a Family Trust or Self Managed Superannuation Fund' +nl+
		currentResObject.var_Section1_1b_Q11 + ht + 'A beneficiary has become a non-resident for tax purposes' +nl+
		'1.c'+ ht + nl +
		currentResObject.var_Section1_1c +nl+
		currentResObject.var_Section1_1c_Q1 + ht +'Your beneficiaries could benefit from the ability to split income between various family members including minor children at normal marginal rates, ' +nl+
		currentResObject.var_Section1_1c_Q2 + ht +'A beneficiary is at risk or vulnerable (eg relationship concerns, bankruptcy or financially risky occupation, mental incapacity, special education needs, a spendthrift) ' +nl+
		currentResObject.var_Section1_1c_Q3 + ht +'In your will you have left nothing or a minimal proportion of your estate to a spouse, defacto, child, step-child or financial dependant (this includes a former spouse being maintained) ' +nl+
		'Section 2 : Enduring Power of Attorney'+ ht + nl + 
		'2.a'+ ht + nl + 
		currentResObject.var_Section2_2a + ht+ 'You do not have an Enduring Power of Attorney' + nl +
		
		'2.b'+ ht + nl +
		currentResObject.var_Section2_2b +nl+
		currentResObject.var_Section2_2b_Q1 + ht +'You have married and it was not specified to be made in contemplation of your marriage' + nl +
		currentResObject.var_Section2_2b_Q2 + ht + 'You want to change the attorneys you have appointed' + nl +
		currentResObject.var_Section2_2b_Q3 + ht + 'You have separated or divorced and your ex spouse/partner was an attorney' + nl +
		currentResObject.var_Section2_2b_Q4 + ht + 'An attorney dies, becomes bankrupt or enters into an insolvency agreement with creditors or becomes mentally incapable' + nl + 
		currentResObject.var_Section2_2b_Q15+ ht + 'An attorney appointed for personal/health matters becomes your paid health carer' + nl +
		'2.c'+ ht + nl +
		currentResObject.var_Section2_2c +nl+
		'2.d'+ ht + nl +
		currentResObject.var_Section2_2d +nl+
		'2.e'+ ht + nl +
		currentResObject.var_Section2_2e +ht+'You have a Self Managed Superannuation Fund'+nl+
		'2.f'+ ht + nl +
		currentResObject.var_Section2_2f +nl+
		'2.g'+ ht + nl +
		currentResObject.var_Section2_2g;
			
        if(typeof currentResObject.note != undefined && currentResObject.note != ''){
            body+='[Note]'+ht+currentResObject.note;
        }
        body=encodeURIComponent(body);
        console.log('Prepare to send: '+body);
        //window.location.href = 'sms:?body='+body;

        if(method == 'mailto'){
            window.location.href = 'mailto:?subject='+subject+'&body='+body;
        }
		
		if(method == 'email'){
			if (jQuery('#rc_email').val() != '')
			{
				window.location.href = 'mailto:'+jQuery('#rc_email').val()+'?subject='+subject+'&body='+body;
			}
			else
			{
				window.location.href = 'mailto:?subject='+subject+'&body='+body;
			}
            
        }
		
        if(method == 'sms'){
            window.location.href = 'sms:?body='+body;
        }
    }   

    mostHelp.iosInputOpen = function(){
        jQuery('.stickyfooter').css('position', 'absolute');
    }

    mostHelp.iosInputClosed = function(){
        jQuery('.stickyfooter').css('position', 'fixed');
    }

});