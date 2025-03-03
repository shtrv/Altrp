import {colorPropertyStyled, gradientStyled, styledString} from "../../helpers/styles";
import getResponsiveSetting from "../../functions/getResponsiveSetting";

/**
 *
 * @param {{}} settings
 * @param {string} elementId
 */
export default function getInputMultiSelectStyles(settings, elementId) {
  let styles = [
    //<editor-fold description="стили лэйбла">
    '.altrp-field-label-container',
    ['background-color', 'label_background_color', 'color'],
    ['padding', 'label_padding', 'dimensions'],
    ['color', 'label_style_font_color', 'color'],
    ['top', 'label_position_top', 'slider'],
    ['left', 'label_position_left', 'slider'],
    ['width', 'label_width', 'slider'],
    '}',
    '.altrp-field-label',
    ['', 'label_style_font_typographic', 'typographic'],
    '}',
    '.altrp-label-icon',
    ['padding', 'icon_padding', 'dimensions'],
    // ['width', 'icon_size', 'slider'],
    // ['height', 'icon_size', 'slider'],
    '}',

    '.altrp-label-icon svg',
    ['width', 'icon_size', 'slider'],
    ['height', 'icon_size', 'slider'],
    ['background-color', 'icon_color_background', 'color'],
    ['fill', 'icon_color', 'color'],
    ['stroke', 'icon_color', 'color'],
    '}',
    '.altrp-label-icon svg path',
    ['fill', 'icon_color', 'color'],
    ['stroke', 'icon_color', 'color'],
    '}',
    '.altrp-label-icon img',
    ['width', 'icon_size', 'slider'],
    ['height', 'icon_size', 'slider'],
    ['background-color', 'icon_color_background', 'color'],
    '}',
    //</editor-fold>
    '.altrp-field-label--required::after',
    ['', 'required_style_font_typographic', 'typographic'],
    ['color', 'required_style_font_color', 'color'],
    '}',
    '.mask-mismatch-message',
    ['margin', 'mismatch_message_margin', 'dimensions'],
    ['padding', 'mismatch_message_padding', 'dimensions'],
    ['color', 'mismatch_message_font_color', 'color'],
    ['', 'mismatch_message_typographic', 'typographic'],
    '}',
    //<editor-fold description="стили иконок">
    '.bp3-icon_text-widget.bp3-icon_text-widget.bp3-icon_text-widget',
    ['margin', 'input_icons_margin', 'dimensions'],
    ['padding', 'input_icons_padding', 'dimensions'],
    ['border-radius', 'input_icons_radius', 'dimensions'],
    '}',
    '.bp3-icon_text-widget',
    ['background-color', 'input_icons_background', 'color', ],
    '}',
    '.bp3-icon_text-widget:hover',
    ['background-color', 'input_icons_background', 'color', ':hover'],
    '}',
    '.bp3-icon_text-widget:active',
    ['background-color', 'input_icons_background', 'color', '.active'],
    '}',
    '.bp3-icon_text-widget svg',
    ['width', 'input_icons_size', 'slider'],
    ['height', 'input_icons_size', 'slider'],
    '}',
    '.bp3-icon_text-widget svg,& .bp3-icon_text-widget path',
    ['fill', 'input_icons_fill', 'color'],
    ['stroke', 'input_icons_stroke', 'color'],
    '}',
    '.bp3-icon_text-widget:hover svg,& .bp3-icon_text-widget:hover path',
    ['fill', 'input_icons_fill', 'color', ':hover'],
    ['stroke', 'input_icons_stroke', 'color', ':hover'],
    '}',
    '.bp3-icon_text-widget:active svg,& .bp3-icon_text-widget:active path',
    ['fill', 'input_icons_fill', 'color', '.active'],
    ['stroke', 'input_icons_stroke', 'color', '.active'],
    '}',
    '.bp3-icon_text-widget img',
    ['width', 'input_icons_size', 'slider'],
    ['height', 'input_icons_size', 'slider'],
    '}',
    //</editor-fold>
    //<editor-fold description="стили тэгов">
    '.bp3-tag',
    ['margin', 'tags_ma', 'dimensions'],
    ['background-color', 'tags_bg', 'color'],
    ['', 'tags_t', 'typographic'],
    ['color', 'tags_color', 'color'],
    '}',
    '.bp3-tag:hover',
    ['background-color', 'tags_bg', 'color', ':hover'],
    ['', 'tags_t', 'typographic', ':hover'],
    ['color', 'tags_color', 'color', ':hover'],
    '}',
    '.bp3-tag svg',
    ['margin', 'delete_ma', 'dimensions'],
    ['width', 'delete_s', 'slider'],
    ['height', 'delete_s', 'slider'],
    '}',
    '.bp3-tag path',
    ['fill', 'tags_delete_color', 'color'],
    '}',
    //</editor-fold>
    //<editor-fold description="стили кнопки очистить">
    '.altrp-clear',
    ['background-color', 'clear_bg', 'clear_bg'],
    ['margin', 'clear_ma', 'dimensions'],
    ['padding', 'clear_pa', 'dimensions'],
    '}',
    '.altrp-clear:hover',
    ['background-color', 'clear_bg', 'clear_bg', ':hover'],
    '}',
    '.altrp-clear:active',
    ['background-color', 'clear_bg', 'clear_bg', '.active'],
    '}',
    '.altrp-clear svg',
    ['width', 'clear_s', 'slider'],
    ['height', 'clear_s', 'slider'],
    ['fill', 'clear_color', 'color'],
    '}',
    '.altrp-clear:hover svg',
    ['fill', 'clear_color', 'color',':hover'],
    '}',
    '.altrp-clear:active svg',
    ['fill', 'clear_color', 'color','.active'],
    '}',
    //</editor-fold>
    //<editor-fold description="стили кнопки">
    ()=>{
      const alignment = getResponsiveSetting(settings, 'alignment')
      switch (alignment){
        case 'flex-start':{
          return '& .bp3-popover-target.bp3-popover-target{flex-grow:0}'
        }
        case 'flex-end':{
          return '& .bp3-popover-target.bp3-popover-target{flex-grow:0}& .bp3-popover-wrapper{justify-content:flex-end;}'
        }
        case 'center':{
          return '& .bp3-popover-target.bp3-popover-target{flex-grow:0}& .bp3-popover-wrapper{justify-content:center;}'
        }
      }
    },
    '.bp3-popover-target',
    ['width', 'field_width', 'slider'],
    ['margin', 'position_margin', 'dimensions'],
    '}',
    '.bp3-multi-select-tag-input-input',
    ['height', 'field_height-m', 'slider'],
    '}',
    '.bp3-tag-input-values.bp3-tag-input-values',
    ['height', 'field_height', 'slider'],
    ['text-align', 'placeholder_and_value_alignment_position_section', ],
    ['padding', 'position_padding', 'dimensions'],
    ['', 'field_font_typographic', 'typographic'],
    ['color', 'field_font_color', 'color'],
    ['opacity', 'background_section_opacity', 'slider'],
    '}',
    '.bp3-tag-input',
    () => {
      const borderGradient = getResponsiveSetting(settings, "multiselect_style_border_gradient_custom");
      const backgroundColor = getResponsiveSetting(settings, "input_bg");
      if (borderGradient) {
        let bg = backgroundColor?.color ? backgroundColor.color : 'rgba(255,255,255,1)'
        let textareaText = getResponsiveSetting(settings, 'multiselect_style_gradient_text')?.replace(/;/g, '') || ''
        return `background: linear-gradient(${bg},${bg}) padding-box, ${textareaText} border-box; border-color: transparent;`;
      }
    },
    () => {
      const borderGradient = getResponsiveSetting(settings, "multiselect_style_border_gradient_custom");
      const backgroundColor = getResponsiveSetting(settings, "input_bg");
      if (backgroundColor && !borderGradient) {
        return colorPropertyStyled(backgroundColor, 'background');
      }
    },
    () => {
      const borderGradient = getResponsiveSetting(settings, "multiselect_style_border_gradient_custom");
      const borderColor = getResponsiveSetting(settings, "border_color");
      if (borderColor && !borderGradient) {
        return colorPropertyStyled(borderColor, 'border-color');
      }
    },
    // ['background-color', 'input_bg', 'color'],
    ['align-items', 'clear_align', ''],
    ['border-style', 'border_type',],
    ['border-width', 'border_width', 'dimensions'],
    // ['border-color', 'border_color', 'color'],
    ['border-radius', 'border_radius', 'dimensions'],
    ['', 'box_shadow', 'shadow'],
    '}',
    '.bp3-tag-input:hover',
    () => {
      const borderGradient = getResponsiveSetting(settings, "multiselect_style_border_gradient_custom", ":hover");
      const backgroundColor = getResponsiveSetting(settings, "input_bg", ":hover");
      if (borderGradient) {
        let bg = backgroundColor?.color ? backgroundColor.color : 'rgba(255,255,255,1)'
        let textareaText = getResponsiveSetting(settings, 'multiselect_style_gradient_text', ":hover")?.replace(/;/g, '') || ''
        return `background: linear-gradient(${bg},${bg}) padding-box, ${textareaText} border-box; border-color: transparent;`;
      }
    },
    () => {
      const borderGradient = getResponsiveSetting(settings, "multiselect_style_border_gradient_custom", ":hover");
      const backgroundColor = getResponsiveSetting(settings, "input_bg", ":hover");
      if (backgroundColor && !borderGradient) {
        return colorPropertyStyled(backgroundColor, 'background');
      }
    },
    () => {
      const borderGradient = getResponsiveSetting(settings, "multiselect_style_border_gradient_custom", ":hover");
      const borderColor = getResponsiveSetting(settings, "border_color", ":hover");
      if (borderColor && !borderGradient) {
        return colorPropertyStyled(borderColor, 'border-color');
      }
    },
    // ['background-color', 'input_bg', 'color', ':hover'],
    ['', 'box_shadow', 'shadow',':hover'],
    '}',
    '.bp3-tag-input.bp3-active',
    ['background-color', 'input_bg', 'color', ':focus'],
    ['', 'box_shadow', 'shadow',':focus'],
    '}',
    '.bp3-tag-input-values.bp3-tag-input-values:hover',
    ['', 'field_font_typographic', 'typographic', ':hover'],
    ['color', 'field_font_color', 'color', ':hover'],
    ['border-color', 'border_color', 'color',':hover'],
    ['border-radius', 'border_radius', 'dimensions',':hover'],
    '.bp3-icon svg',
    ['height', 'i_size', 'slider',':hover'],
    ['width', 'i_size', 'slider',':hover'],
    ['margin', 'i_margin', 'dimensions',':hover'],
    '}',
    '.bp3-icon path',
    ['fill', 'i_color', 'color',':hover'],
    '}',
    '.bp3-icon img',
    ['height', 'i_size', 'slider',':hover'],
    ['width', 'i_size', 'slider',':hover'],
    ['margin', 'i_margin', 'dimensions',':hover'],
    '}',
    '}',
    //</editor-fold>
    //<editor-fold description="стили иконок">
    '.bp3-icon svg',
    ['height', 'i_size', 'slider'],
    ['width', 'i_size', 'slider'],
    ['margin', 'i_margin', 'dimensions'],
    '}',
    '.bp3-icon path',
    ['fill', 'i_color', 'color'],
    '}',
    '.bp3-icon img',
    ['height', 'i_size', 'slider'],
    ['width', 'i_size', 'slider'],
    ['margin', 'i_margin', 'dimensions'],
    '}',
    //</editor-fold>
    //state-disabled
    //<editor-fold description="стили лэйбла">
    '.state-disabled .altrp-field-label-container',
    ['background-color', 'label_background_color', 'color', '.state-disabled'],
    ['padding', 'label_padding', 'dimensions', '.state-disabled'],
    ['color', 'label_style_font_color', 'color', '.state-disabled'],
    ['top', 'label_position_top', 'slider', '.state-disabled'],
    ['left', 'label_position_left', 'slider', '.state-disabled'],
    ['width', 'label_width', 'slider', '.state-disabled'],
    '}',
    '.state-disabled .altrp-field-label',
    ['', 'label_style_font_typographic', 'typographic', '.state-disabled'],
    '}',
    '.state-disabled .altrp-label-icon',
    ['padding', 'icon_padding', 'dimensions', '.state-disabled'],
    '}',

    '.state-disabled .altrp-label-icon svg',
    ['width', 'icon_size', 'slider', '.state-disabled'],
    ['height', 'icon_size', 'slider', '.state-disabled'],
    ['background-color', 'icon_color_background', 'color', '.state-disabled'],
    ['fill', 'icon_color', 'color', '.state-disabled'],
    ['stroke', 'icon_color', 'color', '.state-disabled'],
    '}',
    '.state-disabled .altrp-label-icon svg path',
    ['fill', 'icon_color', 'color', '.state-disabled'],
    ['stroke', 'icon_color', 'color', '.state-disabled'],
    '}',
    '.state-disabled .altrp-label-icon img',
    ['width', 'icon_size', 'slider', '.state-disabled'],
    ['height', 'icon_size', 'slider', '.state-disabled'],
    ['background-color', 'icon_color_background', 'color', '.state-disabled'],
    '}',
    //</editor-fold>
    '.state-disabled .altrp-field-label--required::after',
    ['', 'required_style_font_typographic', 'typographic', '.state-disabled'],
    ['color', 'required_style_font_color', 'color', '.state-disabled'],
    '}',
    '.state-disabled .mask-mismatch-message',
    ['margin', 'mismatch_message_margin', 'dimensions', '.state-disabled'],
    ['padding', 'mismatch_message_padding', 'dimensions', '.state-disabled'],
    ['color', 'mismatch_message_font_color', 'color', '.state-disabled'],
    ['', 'mismatch_message_typographic', 'typographic', '.state-disabled'],
    '}',
    //<editor-fold description="стили иконок">
    '.state-disabled .bp3-icon_text-widget.bp3-icon_text-widget.bp3-icon_text-widget',
    ['margin', 'input_icons_margin', 'dimensions', '.state-disabled'],
    ['padding', 'input_icons_padding', 'dimensions', '.state-disabled'],
    ['border-radius', 'input_icons_radius', 'dimensions', '.state-disabled'],
    '}',
    '.state-disabled .bp3-icon_text-widget',
    ['background-color', 'input_icons_background', 'color', '.state-disabled'],
    '}',
    '.state-disabled .bp3-icon_text-widget:hover',
    ['background-color', 'input_icons_background', 'color', '.state-disabled'],
    '}',
    '.state-disabled .bp3-icon_text-widget:active',
    ['background-color', 'input_icons_background', 'color', '.state-disabled'],
    '}',
    '.state-disabled .bp3-icon_text-widget svg',
    ['width', 'input_icons_size', 'slider', '.state-disabled'],
    ['height', 'input_icons_size', 'slider', '.state-disabled'],
    '}',
    '.state-disabled .bp3-icon_text-widget svg,& .bp3-icon_text-widget path',
    ['fill', 'input_icons_fill', 'color', '.state-disabled'],
    ['stroke', 'input_icons_stroke', 'color', '.state-disabled'],
    '}',
    '.state-disabled .bp3-icon_text-widget img',
    ['width', 'input_icons_size', 'slider', '.state-disabled'],
    ['height', 'input_icons_size', 'slider', '.state-disabled'],
    '}',
    //</editor-fold>
    //<editor-fold description="стили тэгов">
    '.state-disabled .bp3-tag',
    ['margin', 'tags_ma', 'dimensions', '.state-disabled'],
    ['background-color', 'tags_bg', 'color', '.state-disabled'],
    ['', 'tags_t', 'typographic', '.state-disabled'],
    ['color', 'tags_color', 'color', '.state-disabled'],
    '}',
    '.state-disabled .bp3-tag svg',
    ['margin', 'delete_ma', 'dimensions', '.state-disabled'],
    ['width', 'delete_s', 'slider', '.state-disabled'],
    ['height', 'delete_s', 'slider', '.state-disabled'],
    '}',
    '.state-disabled .bp3-tag path',
    ['fill', 'tags_delete_color', 'color', '.state-disabled'],
    '}',
    //</editor-fold>
    //<editor-fold description="стили кнопки очистить">
    '.state-disabled .altrp-clear',
    ['background-color', 'clear_bg', 'clear_bg', '.state-disabled'],
    ['margin', 'clear_ma', 'dimensions', '.state-disabled'],
    ['padding', 'clear_pa', 'dimensions', '.state-disabled'],
    '}',
    '.state-disabled .altrp-clear svg',
    ['width', 'clear_s', 'slider', '.state-disabled'],
    ['height', 'clear_s', 'slider', '.state-disabled'],
    ['fill', 'clear_color', 'color', '.state-disabled'],
    '}',
    //</editor-fold>
    //<editor-fold description="стили кнопки">
    ()=>{
      const alignment = getResponsiveSetting(settings, 'alignment', '.state-disabled')
      switch (alignment){
        case 'flex-start':{
          return '& .state-disabled .bp3-popover-target.bp3-popover-target{flex-grow:0}'
        }
        case 'flex-end':{
          return '& .state-disabled .bp3-popover-target.bp3-popover-target{flex-grow:0}& .bp3-popover-wrapper{justify-content:flex-end;}'
        }
        case 'center':{
          return '& .state-disabled .bp3-popover-target.bp3-popover-target{flex-grow:0}& .bp3-popover-wrapper{justify-content:center;}'
        }
      }
    },
    '.state-disabled .bp3-popover-target',
    ['width', 'field_width', 'slider', '.state-disabled'],
    ['margin', 'position_margin', 'dimensions', '.state-disabled'],
    '}',
    '.state-disabled .bp3-tag-input-values.bp3-tag-input-values',
    ['height', 'field_height', 'slider', '.state-disabled'],
    ['text-align', 'placeholder_and_value_alignment_position_section', '', '.state-disabled'],
    ['padding', 'position_padding', 'dimensions', '.state-disabled'],
    ['', 'field_font_typographic', 'typographic', '.state-disabled'],
    ['color', 'field_font_color', 'color', '.state-disabled'],
    ['opacity', 'background_section_opacity', 'slider', '.state-disabled'],
    '}',
    '.state-disabled .bp3-tag-input',
    ['background-color', 'input_bg', 'color', '.state-disabled'],
    ['align-items', 'clear_align', '', '.state-disabled'],
    ['border-style', 'border_type', '', '.state-disabled'],
    ['border-width', 'border_width', 'dimensions', '.state-disabled'],
    ['border-color', 'border_color', 'color', '.state-disabled'],
    ['border-radius', 'border_radius', 'dimensions', '.state-disabled'],
    ['', 'box_shadow', 'shadow', '.state-disabled'],
    '}',
    //</editor-fold>
    //<editor-fold description="стили иконок">
    '.state-disabled .bp3-icon svg',
    ['height', 'i_size', 'slider', '.state-disabled'],
    ['width', 'i_size', 'slider', '.state-disabled'],
    ['margin', 'i_margin', 'dimensions', '.state-disabled'],
    '}',
    '.state-disabled .bp3-icon path',
    ['fill', 'i_color', 'color', '.state-disabled'],
    '}',
    '.state-disabled .bp3-icon img',
    ['height', 'i_size', 'slider', '.state-disabled'],
    ['width', 'i_size', 'slider', '.state-disabled'],
    ['margin', 'i_margin', 'dimensions', '.state-disabled'],
    '}',
    //</editor-fold>
    // .active
    //<editor-fold description="стили лэйбла">
    '.active altrp-field-label-container',
    ['background-color', 'label_background_color', 'color', '.active'],
    ['padding', 'label_padding', 'dimensions', '.active'],
    ['color', 'label_style_font_color', 'color', '.active'],
    ['top', 'label_position_top', 'slider', '.active'],
    ['left', 'label_position_left', 'slider', '.active'],
    ['width', 'label_width', 'slider', '.active'],
    '}',
    '.active .altrp-field-label',
    ['', 'label_style_font_typographic', 'typographic', '.active'],
    '}',
    '.active .altrp-label-icon',
    ['padding', 'icon_padding', 'dimensions', '.active'],
    '}',

    '.active .altrp-label-icon svg',
    ['width', 'icon_size', 'slider', '.active'],
    ['height', 'icon_size', 'slider', '.active'],
    ['background-color', 'icon_color_background', 'color', '.active'],
    ['fill', 'icon_color', 'color', '.active'],
    ['stroke', 'icon_color', 'color', '.active'],
    '}',
    '.active .altrp-label-icon svg path',
    ['fill', 'icon_color', 'color', '.active'],
    ['stroke', 'icon_color', 'color', '.active'],
    '}',
    '.active .altrp-label-icon img',
    ['width', 'icon_size', 'slider', '.active'],
    ['height', 'icon_size', 'slider', '.active'],
    ['background-color', 'icon_color_background', 'color', '.active'],
    '}',
    //</editor-fold>
    '.active .altrp-field-label--required::after',
    ['', 'required_style_font_typographic', 'typographic', '.active'],
    ['color', 'required_style_font_color', 'color', '.active'],
    '}',
    '.active .mask-mismatch-message',
    ['margin', 'mismatch_message_margin', 'dimensions', '.active'],
    ['padding', 'mismatch_message_padding', 'dimensions', '.active'],
    ['color', 'mismatch_message_font_color', 'color', '.active'],
    ['', 'mismatch_message_typographic', 'typographic', '.active'],
    '}',
    //<editor-fold description="стили иконок">
    '.active .bp3-icon_text-widget.bp3-icon_text-widget.bp3-icon_text-widget',
    ['margin', 'input_icons_margin', 'dimensions', '.active'],
    ['padding', 'input_icons_padding', 'dimensions', '.active'],
    ['border-radius', 'input_icons_radius', 'dimensions', '.active'],
    '}',
    '.active .bp3-icon_text-widget',
    ['background-color', 'input_icons_background', 'color', '.active'],
    '}',
    '.active .bp3-icon_text-widget svg',
    ['width', 'input_icons_size', 'slider', '.active'],
    ['height', 'input_icons_size', 'slider', '.active'],
    '}',
    '.active .bp3-icon_text-widget svg,& .bp3-icon_text-widget path',
    ['fill', 'input_icons_fill', 'color', '.active'],
    ['stroke', 'input_icons_stroke', 'color', '.active'],
    '}',
    '.active .bp3-icon_text-widget img',
    ['width', 'input_icons_size', 'slider', '.active'],
    ['height', 'input_icons_size', 'slider', '.active'],
    '}',
    //</editor-fold>
    //<editor-fold description="стили тэгов">
    '.active .bp3-tag',
    ['margin', 'tags_ma', 'dimensions', '.active'],
    ['background-color', 'tags_bg', 'color', '.active'],
    ['', 'tags_t', 'typographic', '.active'],
    ['color', 'tags_color', 'color', '.active'],
    '}',
    '.active .bp3-tag svg',
    ['margin', 'delete_ma', 'dimensions', '.active'],
    ['width', 'delete_s', 'slider', '.active'],
    ['height', 'delete_s', 'slider', '.active'],
    '}',
    '.active .bp3-tag path',
    ['fill', 'tags_delete_color', 'color', '.active'],
    '}',
    //</editor-fold>
    //<editor-fold description="стили кнопки очистить">
    '.active .altrp-clear',
    ['background-color', 'clear_bg', 'clear_bg', '.active'],
    ['margin', 'clear_ma', 'dimensions', '.active'],
    ['padding', 'clear_pa', 'dimensions', '.active'],
    '}',
    '.active .altrp-clear svg',
    ['width', 'clear_s', 'slider', '.active'],
    ['height', 'clear_s', 'slider', '.active'],
    ['fill', 'clear_color', 'color', '.active'],
    '}',
    //</editor-fold>
    //<editor-fold description="стили кнопки">
    ()=>{
      const alignment = getResponsiveSetting(settings, 'alignment', '.active')
      switch (alignment){
        case 'flex-start':{
          return '& .active .bp3-popover-target.bp3-popover-target{flex-grow:0}'
        }
        case 'flex-end':{
          return '& .active .bp3-popover-target.bp3-popover-target{flex-grow:0}& .bp3-popover-wrapper{justify-content:flex-end;}'
        }
        case 'center':{
          return '& .active .bp3-popover-target.bp3-popover-target{flex-grow:0}& .bp3-popover-wrapper{justify-content:center;}'
        }
      }
    },
    '.active .bp3-popover-target',
    ['width', 'field_width', 'slider', '.active'],
    ['margin', 'position_margin', 'dimensions', '.active'],
    '}',
    '.active .bp3-tag-input-values.bp3-tag-input-values',
    ['height', 'field_height', 'slider', '.active'],
    ['text-align', 'placeholder_and_value_alignment_position_section', '', '.active'],
    ['padding', 'position_padding', 'dimensions', '.active'],
    ['', 'field_font_typographic', 'typographic', '.active'],
    ['color', 'field_font_color', 'color', '.active'],
    ['opacity', 'background_section_opacity', 'slider', '.active'],
    '}',
    '.active .bp3-tag-input',
    ['background-color', 'input_bg', 'color', '.active'],
    ['align-items', 'clear_align', '', '.active'],
    ['border-style', 'border_type', '', '.active'],
    ['border-width', 'border_width', 'dimensions', '.active'],
    ['border-color', 'border_color', 'color', '.active'],
    ['border-radius', 'border_radius', 'dimensions', '.active'],
    ['', 'box_shadow', 'shadow', '.active'],
    '}',
    //</editor-fold>
    //<editor-fold description="стили иконок">
    '.active .bp3-icon svg',
    ['height', 'i_size', 'slider', '.active'],
    ['width', 'i_size', 'slider', '.active'],
    ['margin', 'i_margin', 'dimensions', '.active'],
    '}',
    '.active .bp3-icon path',
    ['fill', 'i_color', 'color', '.active'],
    '}',
    '.active .bp3-icon img',
    ['height', 'i_size', 'slider', '.active'],
    ['width', 'i_size', 'slider', '.active'],
    ['margin', 'i_margin', 'dimensions', '.active'],
    '}',
    //</editor-fold>

  ];
  return styledString(styles, settings)
}

export function getInputMultiSelectPopoverStyles(settings, elementId){
  let styles = [
  //<editor-fold description="стили поповера">
    `.altrp-portal${elementId}`,
    '.bp3-menu',
    ['background-color', 'menu_bg', 'color'],
    '}',
    '.bp3-menu-item',
    ['background-color', 'background_style_background_color', 'color'],
    ['color', 'items_font_color', 'color'],
    ['', 'field_font_typographic', 'typographic',],
    '}',
    '.bp3-menu-item:hover',
    ['color', 'items_font_color', 'color', ':hover'],
    ['background-color', 'background_style_background_color', 'color',':hover'],
    ['', 'field_font_typographic', 'typographic', ':hover'],
    '}',
    '.bp3-menu-item.bp3-active.bp3-active',
    ['color', 'items_font_color', 'color', '.active'],
    ['background-color', 'background_style_background_color', 'color','.active'],
    ['', 'field_font_typographic', 'typographic', '.active'],
    '}',

    '.bp3-icon-add svg',
    ['height', 'a_size', 'slider'],
    ['width', 'a_size', 'slider'],
    ['margin', 'a_margin', 'dimensions'],
    '}',
    '.bp3-icon-add path',
    ['fill', 'a_color', 'color'],
    '}',
    '.bp3-menu-item:hover .bp3-icon-add path',
    ['fill', 'a_color', 'color', ':hover'],
    '}',
    '}',
    //</editor-fold>
    //.active
    '.active .bp3-menu',
    ['background-color', 'menu_bg', 'color', '.active'],
    '}',
    '.active .bp3-menu-item',
    ['background-color', 'background_style_background_color', 'color', '.active'],
    ['color', 'items_font_color', 'color', '.active'],
    ['', 'field_font_typographic', 'typographic', '.active'],
    '}',
    '.active .bp3-icon-add svg',
    ['height', 'a_size', 'slider', '.active'],
    ['width', 'a_size', 'slider', '.active'],
    ['margin', 'a_margin', 'dimensions', '.active'],
    '}',
    '.active .bp3-icon-add path',
    ['fill', 'a_color', 'color', '.active'],
    '}',
    '}',
    //</editor-fold>
  ];
  return styledString(styles, settings)

}
