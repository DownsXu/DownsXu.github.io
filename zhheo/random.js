var posts=["2022/12/20/Huffman/","2022/12/20/mouse/","2022/12/20/STL/","2022/12/20/mysql/","2022/12/20/test/","2022/12/20/数据结构/","2022/12/20/数学建模/TOPSIS/","2022/12/20/javaweb/","2022/12/20/数学建模/层次分析法/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};