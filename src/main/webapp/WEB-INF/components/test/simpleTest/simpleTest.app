<aura:application>
	<aura:attribute name="strAttributeWithDefaultValue" type="String" default="default value"></aura:attribute>
	<aura:attribute name="objAttribute" type="Object[]" /> 
	
	<div aura:id="div1" class="div1">
		string attribute = {!v.strAttributeWithDefaultValue}
	</div>

	<div class="div2">
		<ui:button aura:id="button1" press="{!c.changeAttribute}" label="Change strAttributeWithDefaultValue"/>
    </div>    
</aura:application>