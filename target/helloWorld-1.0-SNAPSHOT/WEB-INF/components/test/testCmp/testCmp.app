<aura:application>
	<aura:attribute name="strAttributeWithDefaultValue" type="String" default="default value"></aura:attribute>
	
	<div aura:id="div1" class="div1">
		string attribute = {!v.strAttributeWithDefaultValue}
	</div>

	<div class="div2">
		<ui:button aura:id="button1" press="{!c.changeAttribute}" label="Change strAttributeWithDefaultValue"/>
    </div>    
</aura:application>