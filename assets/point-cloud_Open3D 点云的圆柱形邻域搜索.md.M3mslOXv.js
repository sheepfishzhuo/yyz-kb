import{_ as a,c as n,o as s,a5 as p}from"./chunks/framework.DLTOeEcZ.js";const m=JSON.parse('{"title":"Open3D 点云的圆柱形邻域搜索","description":"","frontmatter":{},"headers":[],"relativePath":"point-cloud/Open3D 点云的圆柱形邻域搜索.md","filePath":"point-cloud/Open3D 点云的圆柱形邻域搜索.md"}'),e={name:"point-cloud/Open3D 点云的圆柱形邻域搜索.md"},t=p(`<h1 id="open3d-点云的圆柱形邻域搜索" tabindex="-1">Open3D 点云的圆柱形邻域搜索 <a class="header-anchor" href="#open3d-点云的圆柱形邻域搜索" aria-label="Permalink to &quot;Open3D 点云的圆柱形邻域搜索&quot;">​</a></h1><h2 id="一、算法原理" tabindex="-1">一、算法原理 <a class="header-anchor" href="#一、算法原理" aria-label="Permalink to &quot;一、算法原理&quot;">​</a></h2><p>代码中实现过程已十分清晰明了，无需做过多介绍。</p><h2 id="二、代码实现" tabindex="-1">二、代码实现 <a class="header-anchor" href="#二、代码实现" aria-label="Permalink to &quot;二、代码实现&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import open3d as o3d</span></span>
<span class="line"><span>import numpy as np</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># ---------------------------------------读取点云--------------------------------------</span></span>
<span class="line"><span>pcd = o3d.io.read_point_cloud(&quot;data//投影点测试.pcd&quot;)</span></span>
<span class="line"><span># 如果点云不包含颜色信息，则将点云渲染成灰色</span></span>
<span class="line"><span>if pcd.has_colors == -1:</span></span>
<span class="line"><span>    pcd.paint_uniform_color([0.5, 0.5, 0.5])  # 把所有点渲染为灰色</span></span>
<span class="line"><span># 将点云的某一个纬度设置为0，在哪个纬度做圆柱邻域搜索，就把对应的纬度设置为0</span></span>
<span class="line"><span>points = np.asarray(pcd.points)</span></span>
<span class="line"><span>xi = points[:, 0]</span></span>
<span class="line"><span>yi = points[:, 1]</span></span>
<span class="line"><span>zi = points[:, 2] - points[:, 2]  # 这里在Z方向上做圆柱邻域搜索</span></span>
<span class="line"><span>project_points = np.c_[xi, yi, zi]</span></span>
<span class="line"><span>project_cloud = o3d.geometry.PointCloud()  # 使用numpy生成点云</span></span>
<span class="line"><span>project_cloud.points = o3d.utility.Vector3dVector(project_points)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># --------------------------------------KDtree搜索--------------------------------------</span></span>
<span class="line"><span>pcd_tree = o3d.geometry.KDTreeFlann(project_cloud)  # 建立KD树索引</span></span>
<span class="line"><span># ---------------------------------------半径搜索---------------------------------------</span></span>
<span class="line"><span>pcd.colors[15] = [1, 0, 0]  # 给定查询点并渲染为红色</span></span>
<span class="line"><span>[k1, idx1, _] = pcd_tree.search_radius_vector_3d(project_cloud.points[150], 0.5)  # 半径搜索</span></span>
<span class="line"><span>np.asarray(pcd.colors)[idx1[1:], :] = [1, 0, 0]  # 半径搜索结果并渲染为红色</span></span>
<span class="line"><span></span></span>
<span class="line"><span>o3d.visualization.draw_geometries([pcd])</span></span></code></pre></div><h2 id="三、结果展示" tabindex="-1">三、结果展示 <a class="header-anchor" href="#三、结果展示" aria-label="Permalink to &quot;三、结果展示&quot;">​</a></h2><p><img src="https://img-blog.csdnimg.cn/dbb22c1a41f047a6a4bcb79b6f483a6c.png#pic_center" alt="在这里插入图片描述"></p><h2 id="四、相关链接" tabindex="-1">四、相关链接 <a class="header-anchor" href="#四、相关链接" aria-label="Permalink to &quot;四、相关链接&quot;">​</a></h2><p>[1] <a href="https://blog.csdn.net/qq_36686437/article/details/108242609" target="_blank" rel="noreferrer">Open3D KDTree的使用</a></p>`,9),o=[t];function i(l,c,r,d,_,h){return s(),n("div",null,o)}const b=a(e,[["render",i]]);export{m as __pageData,b as default};
