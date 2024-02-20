select
	dv.producto_id,
	p.nombre,
	p.referencia,
	p.precio ,
	p.peso,
	p.categoria_id,
	p.stock,
	p.created_at ,
	p.updated_at
from detalle_venta dv 
inner join producto p on p.id = dv.producto_id 
group by 
	dv.producto_id,
	p.nombre,
	p.referencia,
	p.precio ,
	p.peso,
	p.categoria_id,
	p.stock,
	p.created_at ,
	p.updated_at
order by count(dv.producto_id) desc
limit 1
