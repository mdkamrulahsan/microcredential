console.log('Md Kamrul Ahsan Emon')
/*jQuery program*/
$('document').ready(function(){
    // example 1 
    $('.para2').css('border','ridge 5px green')
        
        /*
        let p2= document.querySelector('para')
        p2.style.border = 'ridge 5px greeen 
        */

        $('a').css({'color':'megenta', 'padding' : '1em 2em', 'backgrould-color': 'lightgreen'})
        $('#pExamples').css ('text-align', 'center')

        // example 2 
        $('div >p').css('color', 'red')
        $('#pExamples > p.para5').css('font-size', '1.3 em')

        // select next adjacent element 
            $('ul + div').css('border', 'orange dotted 1em')

        //Example 5 
        let p4 =$('.para4')
        p4.prev().css('backgroud-color', 'pink')
        p4.prev().css('backgroud-color', 'gray')
        p4.prev().css('font-family', 'Arial Black')
        
        //Example 6 
        $('.p_append').append('<h2>NEW MESSAGE</h2>')
        $('.p_prepend').prepend('NEW LINE')

        //Example 7 
        $('<h3>New Heading</h3>').insertAfter('.p_append').css('backgrould-colour', 'lightblue')
        

        //Example 10 
        $('#btnProperteies').click(function(){
            $('.square').css('background-color', 'pink')
        })

        $('#addclass').click(function(){
            $('.square').addClass('btnColor')
        })

        $('#removeClass').click(function(){
            $('.square').removeClass('btnColor')

        })

        $('#toggleClass').click(function(){
            $('.square').toggleClass('btnColor')
        
        })
        

        //example 12

        function hoverCircle(){
        $('.circle').addClass('btnColor')
        $('.circle').html('<p> Circle was hovered!</p>')
        }

        function resizeWindow(){
            $('.circle').html('<p> Window was resized</p>')
            }

        function dblClickCircle(){
                $('.circle').html('<p> Double Click</p>')
                }

        $('.circle').hover(hoverCircle)
        $(window).resize(resizeWindow)
        $('.circle').dblclick(dblClickCircle)

    })
        