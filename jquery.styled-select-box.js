/**
 * </> with <3 by Adrien
 * https://github.com/kaddyadriano/jquery-styled-select-box
 */
(function($, d){
    $(d).ready(function(){$('select.styled').styledSelect()});
    $.fn.styledSelect = function(){
        if(!this.length) return false;
        var select = this,
            val = select.val(),
            selectedTitle = $('option[value="'+val+'"]').html(),
            options = $('option', select),
            html = '';
        html += '<div class="select"><span class="selected-display">'+selectedTitle+'</span><span class="arrow-wrap"></span></span>';
        html += '<div class="options">';
        options.each(function(k, opt){
            opt = $(opt);
            html += '<div class="option'+(opt.attr('value') == val ? ' selected' : '')+'" data-value="'+opt.attr('value')+'">'+opt.html()+'</div>';
        });
        html += '</div>';
        html += '</div>';
        var htmlSelect = $(html);
        htmlSelect.css({width: Number(parseInt(select.css('width'))+82)+'px'});
        select.hide().before(htmlSelect);
        $('.option').on('click', function(e){
            var opt = $(this),
                optVal = opt.attr('data-value'),
                optTitle = opt.html();
            if(optVal != val){
                $('.selected-display', htmlSelect).html(optTitle);
                select.val(optVal).trigger('change');
            }
            $('.option', htmlSelect).removeClass('selected');
            opt.addClass('selected');
            toggleOptions(htmlSelect);
        });

        $('.selected-display, .arrow-wrap', htmlSelect).on('click', function(e){
            toggleOptions(htmlSelect);
        });

        toggleOptions = function(htmlSelect){
            if(htmlSelect.hasClass('open')){
                $('.options', htmlSelect).hide();
                htmlSelect.removeClass('open');
            }else{
                htmlSelect.addClass('open');
                $('.options', htmlSelect).show();
            }
        }

    }
    if(!$("style.styled-select-box-style").length) {
        var style = "<style class='styled-select-box-style' type='text/css'>" +
            "select.styled {display: none}\n" +
            ".select {\n" +
            "  color: #898989;\n" +
            "  padding-left: 16px;\n" +
            "  line-height: 41px;\n" +
            "  height: 41px;\n" +
            "  background-image: none;\n" +
            "  background-color: #f6f6f5;\n" +
            "  border: 1px solid #e9e9e9;\n" +
            "  border-radius: 3px;\n" +
            "  font-size: 14px;\n" +
            "  cursor: pointer;\n" +
            "  position: relative;\n" +
            "  box-sizing: border-box;\n" +
            "}\n" +
            "\n" +
            ".select .selected-display {\n" +
            "  display: block\n" +
            "}\n" +
            "\n" +
            ".select .arrow-wrap {\n" +
            "  display: block;\n" +
            "  width: 40px;\n" +
            "  height: 100%;\n" +
            "  position: absolute;\n" +
            "  top: 0;\n" +
            "  right: 0;\n" +
            "  text-align: center;\n" +
            "  font-size: 10px\n" +
            "}\n" +
            "\n" +
            ".select .arrow-wrap:after {\n" +
            "  content: \"\";\n" +
            "  position: absolute;\n" +
            "  width: 0; \n" +
            "  height: 0; \n" +
            "  border-left: 4px solid transparent;\n" +
            "  border-right: 4px solid transparent;\n" +
            "  border-top: 6px solid #aaa;\n" +
            "  top: 50%;\n" +
            "  right: 50%;\n" +
            " transform: translate(50%, -50%);\n" +
            "}\n" +
            ".select.open .arrow-wrap:after {\n" +
            "  border-left: 4px solid transparent;\n" +
            "  border-right: 4px solid transparent;\n" +
            "  border-bottom: 6px solid #aaa;\n" +
            "  border-top: 0" +
            "}\n" +
            "\n" +
            ".select .options {\n" +
            "  width: 100%;\n" +
            "  max-height: 200px;\n" +
            "  background: #f8f8f8;\n" +
            "  overflow-y: auto;\n" +
            "  position: absolute;\n" +
            "  z-index: 100;\n" +
            "  left: 0;\n" +
            "  padding: 10px;\n" +
            "  box-sizing: border-box;\n" +
            "  display: none\n" +
            "}\n" +
            "\n" +
            ".select .options .option {\n" +
            "  font-size: 16px;\n" +
            "  color: #1E1D1D;\n" +
            "  padding: 4px 7px 6px;\n" +
            "  line-height: 18px;\n" +
            "}\n" +
            "\n" +
            ".select .options .option:hover, .select .options .option.selected {\n" +
            "  color: #515151;\n" +
            "  font-weight: bold\n" +
            "}" +
            "</style>";

        $('html head').append(style);
    }

})(jQuery, document);