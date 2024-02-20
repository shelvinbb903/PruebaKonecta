select  
	p.id,
	p.nombre ,
	p.referencia,
	p.precio ,
	p.peso,
	p.categoria_id,
	p.stock,
	p.created_at ,
	p.updated_at 
from producto p
order by stock desc
limit 1