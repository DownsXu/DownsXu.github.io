var posts=["2022/12/20/STL/","2023/02/23/code/","2022/12/20/mouse/","2022/12/20/mysql/","2023/02/20/数据结构/","2022/12/20/test/","2022/12/20/数学建模/TOPSIS/","2022/12/20/数学建模/层次分析法/","2023/01/04/课程设计/CaesarCode/","2022/12/20/课程设计/Huffman/","2022/12/20/javaweb/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};