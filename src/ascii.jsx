import React from 'react';

const AsciiTree = () => {
    return (
        <pre style={{ whiteSpace: 'pre-wrap' }}>
            {`
            * *    
           *    *  *
      *  *    *     *  *
     *     *    *  *    *
 * *   *    *    *    *   *
 *     *  *    * * .#  *   *
 *   *     * #.  .# *   *
  *     "#.  #: #" * *    *
 *   * * "#. ##"       *
   *       "###
             "##
              ##.
              .##:
              :###
              ;###
            ,####.
/////\/\/\/\/\/.######.\/\/\/\/\//////
            `}
        </pre> 
    );
};

export default AsciiTree;
