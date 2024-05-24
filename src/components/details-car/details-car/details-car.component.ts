import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IconsModule } from 'src/components/icons/icons.module';
import {
  AllCarData,
  Comment,
} from 'src/components/shared/models/all-car-data.model';
import { carsData } from 'src/components/shared/models/car-data-component';
import { CarService } from 'src/components/shared/service/car.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { comentService } from 'src/components/shared/service/coment.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-details-car',
  templateUrl: './details-car.component.html',
  styleUrls: ['./details-car.component.scss'],
  animations: [
    trigger('commentAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate(
          '3000ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class DetailsCarComponent implements OnInit {
  cars: AllCarData | undefined;
  carId!: number;
  commentForm: FormGroup;
  comments: Comment[] = [];
  hoverLike: boolean = false;
  hoverDislike: boolean = false;
  hoverStates: { [commentId: number]: boolean } = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carService: CarService,
    private comentService: comentService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.commentForm = this.fb.group({
      username: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  onHoverComment(commentId: number, isHovering: boolean) {
    this.hoverStates[commentId] = isHovering;
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.carService.getCarById(id).subscribe((data: AllCarData) => {
      this.cars = data;
    });

    this.route.paramMap.subscribe((params) => {
      this.carId = +params.get('id')!;
    });

    this.route.paramMap.subscribe((params) => {
      this.carId = +params.get('id')!;
      this.loadComments();
    });
  }
  goBack() {
    this.router.navigate(['/']);
  }

  loadComments(): void {
    this.comentService.getAllCommentsByCarId(this.carId).subscribe(
      (comments) => {
        this.comments = comments;
      },
      (error) => {
        this.snackBar.open('Error al cargar los comentarios', 'Cerrar', {
          duration: 3000,
        });
      }
    );
  }

  onSubmit() {
    if (this.commentForm.valid) {
      const newComment = {
        ...this.commentForm.value,
        date: new Date().toISOString(),
        carId: this.carId,
        like: 0,
        dislike: 0,
      };

      this.comentService.saveComment(newComment).subscribe(
        () => {
          this.snackBar.open(
            'El comentario se ha guardado con éxito',
            'Cerrar',
            {
              duration: 3000,
            }
          );
          this.commentForm.reset();
          this.loadComments();
        },
        (error) => {
          this.snackBar.open('Error al guardar el comentario', 'Cerrar', {
            duration: 3000,
          });
        }
      );
    }
  }

  addLike(commentId: number) {
    this.comentService.addLike(commentId).subscribe(
      () => {
        this.snackBar.open('Like agregado', 'Cerrar', {
          duration: 3000,
        });
        this.loadComments(); // Actualiza la lista de comentarios después de agregar el like
      },
      (error) => {
        this.snackBar.open('Error al agregar like', 'Cerrar', {
          duration: 3000,
        });
      }
    );
  }

  addDislike(commentId: number) {
    this.comentService.addDislike(commentId).subscribe(
      () => {
        this.snackBar.open('Dislike agregado', 'Cerrar', {
          duration: 3000,
        });
        this.loadComments(); // Actualiza la lista de comentarios después de agregar el dislike
      },
      (error) => {
        this.snackBar.open('Error al agregar dislike', 'Cerrar', {
          duration: 3000,
        });
      }
    );
  }
}
